import '../styles/matrix-bg.css';
import { useEffect, useRef } from 'react';

export default function MatrixBg({
  fontSize = 14,
  fps = 30,                // ~ your 33ms
  trailOpacity = 0.05,     // 0..1
  color = 'rgba(0,255,0,1)'
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });

    let width, height, columns, drops;
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.ceil(width / fontSize);
      drops = Array(columns).fill(1);

      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = 'top';
    };

    resize();
    window.addEventListener('resize', resize);

    const glyphs = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴン0123456789@$%&*+-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const glyph = () => glyphs[Math.floor(Math.random() * glyphs.length)];

    let last = performance.now();
    const interval = 2000 / fps;

    const loop = (now) => {
      if (now - last >= interval) {
        last = now;

        ctx.fillStyle = `rgba(0,0,0,${trailOpacity})`;
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = color;
        for (let i = 0; i < drops.length; i++) {
          const y = drops[i] * fontSize;
          ctx.fillText(glyph(), i * fontSize, y);
          if (y > height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    // initial paint
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);

    if (!prefersReduced) {
      rafRef.current = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [fontSize, fps, trailOpacity, color]);

  return <canvas className="matrix-canvas" ref={canvasRef} aria-hidden="true" />;
}
