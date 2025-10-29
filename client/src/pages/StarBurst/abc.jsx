import React, { useRef, useEffect, useCallback } from 'react';

// === CONSTANTS (FOR LIQUID PLASMA) ===
const THROTTLE_MS = 60; // Slower spawn for fewer, larger blobs
const PARTICLES_PER_SPAWN = 1; // Spawn one large blob at a time
const MAX_PARTICLES = 60; // Fewer particles for performance with blur/larger size
const BASE_RADIUS = 25; // Larger base size for blobs
const COLOR_SPECTRUM = [
    { h: 280, s: 80, l: 60 }, // Purple
    { h: 320, s: 80, l: 60 }, // Magenta
    { h: 0, s: 80, l: 60 },   // Red
    { h: 40, s: 80, l: 60 },  // Orange
    { h: 60, s: 80, l: 60 },  // Yellow
    { h: 120, s: 80, l: 60 }, // Green
    { h: 180, s: 80, l: 60 }, // Cyan
    { h: 240, s: 80, l: 60 }, // Blue
];

// Simple Perlin Noise implementation (for organic movement)
// This is a minimal, basic 1D/2D noise that gives a wavy, smooth motion.
const Noise = (() => {
    const P = [];
    for (let i = 0; i < 256; i++) {
        P.push(i);
    }
    // Shuffle P for randomness
    for (let i = P.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [P[i], P[j]] = [P[j], P[i]];
    }
    const p = P.concat(P); // Double for seamless lookup

    const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (a, b, t) => a + t * (b - a);
    const grad = (hash, x, y) => {
        const h = hash & 15;
        const u = h < 8 ? x : y;
        const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    };

    const noise2D = (x, y) => {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;

        x -= Math.floor(x);
        y -= Math.floor(y);

        const u = fade(x);
        const v = fade(y);

        const A = p[X] + Y;
        const B = p[X + 1] + Y;

        return lerp(
            lerp(grad(p[A], x, y), grad(p[B], x - 1, y), u),
            lerp(grad(p[A + 1], x, y - 1), grad(p[B + 1], x - 1, y - 1), u),
            v
        );
    };

    return { noise2D };
})();


// === PARTICLE CLASS (LIQUID BLOB) ===
class LiquidBlob {
  constructor(x, y, hueIndex, canvasSize) {
    this.x = x;
    this.y = y;
    this.radius = BASE_RADIUS + Math.random() * 10;
    this.alpha = 0.8; // Always fairly opaque
    this.life = Math.random() * 200 + 150; // Long life
    this.maxLife = this.life;
    this.hueIndex = hueIndex;
    this.color = `hsl(${COLOR_SPECTRUM[this.hueIndex].h}, ${COLOR_SPECTRUM[this.hueIndex].s}%, ${COLOR_SPECTRUM[this.hueIndex].l}%)`;
    
    // Perlin noise offset for unique movement
    this.noiseOffsetX = Math.random() * 1000;
    this.noiseOffsetY = Math.random() * 1000;
    this.noiseSpeed = 0.005 + Math.random() * 0.005; // Different speeds
    this.canvasSize = canvasSize; // Keep track of canvas size for boundary checks
  }

  update(time) {
    this.life--;
    this.alpha = 0.8 * Math.max(0, this.life / this.maxLife); // Fade slowly

    // Perlin noise driven movement
    const noiseValX = Noise.noise2D(this.noiseOffsetX + time * this.noiseSpeed, 0);
    const noiseValY = Noise.noise2D(0, this.noiseOffsetY + time * this.noiseSpeed);

    this.vx = noiseValX * 2; // Scale noise value for velocity
    this.vy = noiseValY * 2;

    this.x += this.vx;
    this.y += this.vy;

    // Bounce off walls (simple boundary check)
    if (this.x < this.radius || this.x > this.canvasSize.width - this.radius) {
        this.vx *= -1;
        this.x = Math.max(this.radius, Math.min(this.canvasSize.width - this.radius, this.x)); // Snap back
    }
    if (this.y < this.radius || this.y > this.canvasSize.height - this.radius) {
        this.vy *= -1;
        this.y = Math.max(this.radius, Math.min(this.canvasSize.height - this.radius, this.y)); // Snap back
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// === REACT COMPONENT ===
const LiquidPlasmaCanvas = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);
  const lastSpawnTime = useRef(0);
  const hueCounter = useRef(0); // To cycle through colors
  const time = useRef(0); // For Perlin noise

  // 1. ANIMATION LOOP (Metaball/Liquid Effect)
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    time.current += 1; // Increment time for noise

    // Step 1: Clear the canvas with a transparent fill
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Step 2: Draw all particles onto a temporary, non-blurred layer
    // Using 'source-over' for normal drawing
    ctx.globalCompositeOperation = 'source-over';
    ctx.save();
    ctx.filter = 'blur(10px)'; // Apply blur to create the liquid effect
    particles.current.forEach(particle => {
      particle.update(time.current);
      particle.draw(ctx);
    });
    ctx.restore(); // Restore to remove the blur filter

    // Step 3: Draw the same particles again, but this time with a color fill
    // and 'lighter' composite operation to make them merge and glow
    ctx.globalCompositeOperation = 'lighter';
    particles.current.forEach(particle => {
      // Don't update again, just redraw for merging effect
      ctx.save();
      ctx.globalAlpha = particle.alpha;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    
    // Clean up dead particles
    for (let i = particles.current.length - 1; i >= 0; i--) {
        if (particles.current[i].life <= 0) {
            particles.current.splice(i, 1);
        }
    }

    // PERFORMANCE CAP
    if (particles.current.length > MAX_PARTICLES) {
        particles.current.splice(0, particles.current.length - MAX_PARTICLES);
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  // 2. MOUSE EVENT HANDLER (SIMPLIFIED SPAWNING)
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

    // Cycle through the defined color spectrum
    const currentHueIndex = hueCounter.current % COLOR_SPECTRUM.length;
    hueCounter.current++;

    // Spawn a single, larger LiquidBlob at the mouse location
    const canvasSize = { width: canvas.width, height: canvas.height };
    for (let i = 0; i < PARTICLES_PER_SPAWN; i++) {
      particles.current.push(
        new LiquidBlob(mouseX, mouseY, currentHueIndex, canvasSize)
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
      // Update canvas size for all particles for boundary checks
      particles.current.forEach(p => p.canvasSize = { width: canvas.width, height: canvas.height });
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
    <div className="bg-gray-950 min-h-screen text-white flex items-center justify-center font-sans relative overflow-hidden">
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
      
      {/* Centered content for demonstration, styled for modern feel */}
      <div className="relative z-20 text-center p-8 bg-black bg-opacity-70 rounded-2xl shadow-3xl backdrop-blur-lg border border-purple-500/60">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
          Liquid Plasma Flow 🧪
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
          Experience an organic, flowing plasma effect with vibrant, merging blobs.
        </p>
      </div>
    </div>
  );
};

export default LiquidPlasmaCanvas;