import React, { useRef, useEffect, useCallback } from 'react';

// === CONSTANTS (FOR MINIMALIST GLIMMER ON WHITE) ===
const THROTTLE_MS = 100; // Slower spawn rate
const PARTICLES_PER_SPAWN = 3; // Fewer particles per spawn
const MAX_PARTICLES = 250; // Moderate particle count for subtlety
const BASE_RADIUS = 1.5; // Small, subtle particles

// A palette of light, desaturated pastel colors
const GLIMMER_COLORS = [
    'hsl(200, 30%, 85%)', // Light Blue-Gray
    'hsl(240, 30%, 85%)', // Light Lavender
    'hsl(280, 25%, 85%)', // Light Pale Violet
    'hsl(160, 20%, 85%)', // Light Mint
    'hsl(30, 35%, 85%)',  // Light Peach
];

// === PARTICLE CLASS (MINIMALIST GLIMMER) ===
class GlimmerParticle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.radius = BASE_RADIUS + Math.random() * 1.5; // Slightly varied small size
    this.alpha = 1;
    this.life = Math.random() * 300 + 200; // Long, slow fade
    this.maxLife = this.life;
    this.color = color;

    // Gentle, random initial velocity
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 0.5 + 0.1; // Very slow speed
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
  }

  update() {
    // Gentle drag
    this.vx *= 0.99;
    this.vy *= 0.99;

    this.x += this.vx;
    this.y += this.vy;
    
    // Slow fade
    this.life--;
    this.alpha = Math.max(0, this.life / this.maxLife); 

    // Subtle radius shrink (even slower)
    this.radius *= 0.998;
  }

  draw(ctx) {
    ctx.save();
    // Set alpha for the particle itself, then draw.
    ctx.globalAlpha = Math.max(0, this.alpha);
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.2, this.radius), 0, Math.PI * 2); // Minimum radius
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

// === REACT COMPONENT ===
const MinimalistGlimmerCanvas = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);
  const lastSpawnTime = useRef(0);
  const colorIndex = useRef(0); // For cycling through colors

  // 1. ANIMATION LOOP
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // VERY subtle clearing effect for ghosting on white
    // Use a very light, almost transparent white to achieve a soft trail
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'; // Very subtle white overlay
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // No globalCompositeOperation = 'lighter' as it over-brightens on white backgrounds
    ctx.globalCompositeOperation = 'source-over'; 

    // Update and Draw Particles
    for (let i = particles.current.length - 1; i >= 0; i--) {
      const particle = particles.current[i];
      particle.update();
      particle.draw(ctx);
      
      // Removal logic
      if (particle.life <= 0 || particle.alpha <= 0 || particle.radius <= 0.2) {
        particles.current.splice(i, 1);
      }
    }

    // PERFORMANCE CAP
    if (particles.current.length > MAX_PARTICLES) {
        particles.current.splice(0, particles.current.length - MAX_PARTICLES);
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  // 2. MOUSE EVENT HANDLER (GENTLE SPAWNING)
  const handleMouseMove = useCallback((event) => {
    const now = Date.now();
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (now - lastSpawnTime.current < THROTTLE_MS) {
      return;
    }
    lastSpawnTime.current = now;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Get the current color from the palette
    const currentColor = GLIMMER_COLORS[colorIndex.current % GLIMMER_COLORS.length];
    colorIndex.current++; // Cycle color for next particle

    for (let i = 0; i < PARTICLES_PER_SPAWN; i++) {
      particles.current.push(
        new GlimmerParticle(mouseX, mouseY, currentColor)
      );
    }
  }, []);

  // 3. SETUP AND CLEANUP EFFECT
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const handleResize = () => setCanvasSize();

    window.addEventListener('resize', handleResize);
    animationFrameId.current = requestAnimationFrame(animate); 

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [animate]);

  return (
    <div className="bg-white min-h-screen text-gray-800 flex items-center justify-center font-sans relative overflow-hidden">
      {/* The Canvas element covers the whole screen */}
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        style={{
          position: 'fixed', 
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          cursor: 'none' // Hide cursor for better effect integration
        }}
      />
      
      {/* Centered content for demonstration, styled for clarity on white */}
      <div className="relative z-20 text-center p-8 bg-white bg-opacity-70 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-200">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-gray-800">
          Minimalist Glimmer ✨
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
          Subtle, elegant trails in pastel hues for a clean white background.
        </p>
      </div>
    </div>
  );
};

export default MinimalistGlimmerCanvas;   