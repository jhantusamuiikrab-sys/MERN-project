import React, { useRef, useEffect, useCallback } from 'react';

// === CONSTANTS ===
const THROTTLE_MS = 30; // Increased frequency for smoother trails
const PARTICLES_PER_SPAWN = 10;
const MAX_PARTICLES = 500; // Cap particle count for performance
const LINK_DISTANCE = 80; // Distance to draw a line between nearby particles

// === PARTICLE CLASS (Advanced Logic for a single particle) ===
class AdvancedParticle {
  constructor(x, y, initialVx, initialVy) {
    this.x = x;
    this.y = y;
    
    // Size and opacity properties
    this.radius = Math.random() * 1.5 + 1; 
    this.alpha = 1;
    this.life = Math.random() * 120 + 80; // More varied life
    this.maxLife = this.life;
    
    // Velocity with initial inherited velocity (for a more cohesive burst)
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 2 + 1;
    
    this.vx = initialVx * 0.5 + Math.cos(angle) * speed; 
    this.vy = initialVy * 0.5 + Math.sin(angle) * speed;
    
    // Random color using HSL, focusing on a deep space/magical spectrum
    this.hue = Math.random() * 360;
    this.color = `hsl(${this.hue}, 100%, 70%)`; 
  }

  // Update position and state
  update() {
    // 1. Air Resistance/Drag: Slows the particle down over time
    this.vx *= 0.98; 
    this.vy *= 0.98;
    
    // 2. Position Update
    this.x += this.vx;
    this.y += this.vy;
    
    // 3. Gravity/Vertical Drift (Slightly increased for a gentle fall)
    this.vy += 0.015; 
    
    // 4. Fade & Shrink (Alpha and radius based on remaining life)
    this.life--;
    this.alpha = Math.max(0, this.life / this.maxLife); // Linear fade based on life
    this.radius *= 0.99; // Subtle continuous shrink
    
    // 5. Color shift over time (Subtle rainbow/sparkle effect)
    this.hue = (this.hue + 0.5) % 360;
    this.color = `hsl(${this.hue}, 100%, 70%)`;
  }

  // Draw the particle on the canvas
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    
    ctx.beginPath();
    // Add a shadow for a glowing effect
    ctx.shadowBlur = Math.max(0, this.radius * 3);
    ctx.shadowColor = this.color;
    
    ctx.arc(this.x, this.y, Math.max(0, this.radius), 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

// === REACT COMPONENT ===
const AdvancedStarBurstCanvas = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);
  const lastSpawnTime = useRef(0);
  const mouseVelocity = useRef({ vx: 0, vy: 0, lastX: 0, lastY: 0 });

  // 1. PARTICLE LINKING DRAW FUNCTION
  const drawParticleLinks = (ctx) => {
    const currentParticles = particles.current;
    
    // Iterate over all particles and connect nearby ones with lines
    for (let i = 0; i < currentParticles.length; i++) {
      for (let j = i + 1; j < currentParticles.length; j++) {
        const p1 = currentParticles[i];
        const p2 = currentParticles[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If particles are close enough, draw a faint line
        if (distance < LINK_DISTANCE) {
          ctx.beginPath();
          // Line opacity is inverse to distance
          ctx.globalAlpha = Math.max(0, p1.alpha * p2.alpha * (1 - distance / LINK_DISTANCE) * 0.5);
          ctx.strokeStyle = `hsl(${p1.hue}, 100%, 70%)`; // Use one particle's color
          ctx.lineWidth = 0.5;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
  };

  // 2. ANIMATION LOOP
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // **GHOSTING EFFECT:** Clear with higher opacity for a shorter trail
    ctx.fillStyle = 'rgba(10, 10, 30, 0.2)'; // 0.2 alpha gives a shorter, clearer trail
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw connecting lines first
    drawParticleLinks(ctx);

    // Update and Draw Particles
    particles.current.forEach((particle, index) => {
      particle.update();
      particle.draw(ctx);
      
      // Removal logic: Check if particle is effectively dead
      if (particle.life <= 0 || particle.alpha <= 0 || particle.radius <= 0) {
        particles.current.splice(index, 1);
      }
    });
    
    // **PERFORMANCE CAP:** Ensure we don't exceed the max particle count
    if (particles.current.length > MAX_PARTICLES) {
        // Remove the oldest particles (at the start of the array)
        particles.current.splice(0, particles.current.length - MAX_PARTICLES);
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  // 3. MOUSE EVENT HANDLER (THROTTLED & VELOCITY CALCULATION)
  const handleMouseMove = useCallback((event) => {
    const now = Date.now();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calculate mouse velocity for a better 'burst' effect
    const deltaT = (now - lastSpawnTime.current) / 1000; // time in seconds
    let currentVx = 0;
    let currentVy = 0;
    
    if (deltaT > 0.001) { // Avoid division by zero
        currentVx = (mouseX - mouseVelocity.current.lastX) / deltaT;
        currentVy = (mouseY - mouseVelocity.current.lastY) / deltaT;
    }
    
    // Store current position for the next calculation
    mouseVelocity.current.lastX = mouseX;
    mouseVelocity.current.lastY = mouseY;
    
    // Store velocity (scaled down for use in Particle constructor)
    // The scaling factor (e.g., / 100) makes the velocity reasonable for the particle physics
    mouseVelocity.current.vx = currentVx / 100;
    mouseVelocity.current.vy = currentVy / 100;
    
    // Throttle check
    if (now - lastSpawnTime.current < THROTTLE_MS) {
      return;
    }
    lastSpawnTime.current = now;

    // Spawn a burst of particles at the mouse location
    for (let i = 0; i < PARTICLES_PER_SPAWN; i++) {
      particles.current.push(
        new AdvancedParticle(mouseX, mouseY, mouseVelocity.current.vx, mouseVelocity.current.vy)
      );
    }
  }, []);

  // 4. SETUP AND CLEANUP EFFECT
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set initial size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const handleResize = () => setCanvasSize();

    // Start listeners and animation loop
    window.addEventListener('resize', handleResize);
    // Use onMouseMove on the canvas directly (like in the render) for mouse tracking.
    // The animation starts here.
    animationFrameId.current = requestAnimationFrame(animate); 

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [animate]);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center font-sans relative overflow-hidden">
      {/* The Canvas element covers the whole screen */}
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove} // Mouse tracking is done here
        style={{
          position: 'fixed', 
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          cursor: 'none'
        }}
      />
      
      {/* Centered content for demonstration */}
      <div className="relative z-20 text-center p-8 bg-black bg-opacity-30 rounded-lg shadow-2xl backdrop-blur-sm">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Advanced Star-Trail Effect ✨
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          The particles now have air resistance, gravity, and link together as they travel!
        </p>
      </div>
    </div>
  );
};

export default AdvancedStarBurstCanvas;