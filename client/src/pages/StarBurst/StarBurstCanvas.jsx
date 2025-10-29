import React, { useRef, useEffect, useCallback } from 'react';

// === CONSTANTS ===
// Max frequency of particle spawning during mouse move (1000ms / 50ms = 20 times per second)
const THROTTLE_MS = 50; 
// Number of particles to spawn on each throttled mouse event
const PARTICLES_PER_SPAWN = 15;

// === PARTICLE CLASS (Logic for a single particle) ===
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // Initial size and fade properties
    this.radius = Math.random() * 2 + 1; 
    this.alpha = 1;
    this.life = 100; // Frames of life before removal
    
    // Calculate radial velocity for a 'burst' effect
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 1.5 + 0.5;
    
    this.vx = Math.cos(angle) * speed; // Velocity X
    this.vy = Math.sin(angle) * speed; // Velocity Y
    
    // Random vibrant color using HSL
    this.color = `hsl(${Math.random() * 360}, 100%, 75%)`; 
  }

  // Update position and state
  update() {
    this.x += this.vx;
    this.y += this.vy;
    // Slowly fade out and shrink
    this.alpha -= 0.01;
    this.radius -= 0.02;
    this.life--;
    
    // Simple gravity/slowdown effect
    this.vy += 0.01; 
  }

  // Draw the particle on the canvas
  draw(ctx) {
    ctx.save();
    // Use the particle's alpha for global transparency
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.beginPath();
    // Draw a small circle (the 'star' element)
    ctx.arc(this.x, this.y, Math.max(0, this.radius), 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

// === REACT COMPONENT ===
const StarBurstCanvas = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);
  const lastSpawnTime = useRef(0);

  // 1. ANIMATION LOOP
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas, but leave a slight trail (ghosting) by only clearing
    // partially. This adds to the magical/starry effect.
    ctx.fillStyle = 'rgba(10, 10, 30, 0.1)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((particle, index) => {
      // Check if particle should be removed
      if (particle.life <= 0 || particle.alpha <= 0 || particle.radius <= 0) {
        particles.current.splice(index, 1);
      } else {
        particle.update();
        particle.draw(ctx);
      }
    });

    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  // 2. MOUSE EVENT HANDLER (THROTTLED)
  const handleMouseMove = useCallback((event) => {
    const now = Date.now();
    // Throttle check
    if (now - lastSpawnTime.current < THROTTLE_MS) {
      return;
    }
    lastSpawnTime.current = now;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Spawn a burst of particles at the mouse location
    for (let i = 0; i < PARTICLES_PER_SPAWN; i++) {
      particles.current.push(new Particle(mouseX, mouseY));
    }
  }, []);

  // 3. SETUP AND CLEANUP EFFECT
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
    animationFrameId.current = requestAnimationFrame(animate); 

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [animate]); // Dependency on animate is intentional

  return (
    <div className="bg-gray-900 min-h-screen text-white flex items-center justify-center font-sans relative overflow-hidden">
      {/* The Canvas element covers the whole screen */}
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        // Set pointerEvents to 'none' if you want elements beneath the canvas to be clickable, 
        // or 'auto' if the canvas should capture all events (like the mousemove)
        style={{
          position: 'fixed', 
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10, // Keep it above the background, but potentially below modal content
          cursor: 'none' // Hide the default cursor to focus on the effect
        }}
      />
      
      {/* Centered content for demonstration */}
      <div className="relative z-20 text-center p-8 bg-black bg-opacity-30 rounded-lg shadow-2xl backdrop-blur-sm">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Hover for Stars
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Move your cursor around the screen to see the animated particle trail!
        </p>
      </div>
    </div>
  );
};

export default StarBurstCanvas;
