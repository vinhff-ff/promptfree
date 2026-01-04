import { useEffect, useRef } from "react";

const BackgroundBeams = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const beams = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.1 + Math.random(),
      length: 10 + Math.random() * 20,
      opacity: 0.1 + Math.random() * 0.3,
    }));

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      beams.forEach((b) => {
        const gradient = ctx.createLinearGradient(
          b.x,
          b.y,
          b.x,
          b.y + b.length
        );
        gradient.addColorStop(0, `rgba(0,0,0,0),${b.opacity})`);
        gradient.addColorStop(1, "#ff0073ff");

        ctx.fillStyle = gradient;
        ctx.fillRect(b.x, b.y, 2, b.length);

        b.y += b.speed;
        if (b.y > height) b.y = -b.length;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="background-beams" />;
};

export default BackgroundBeams;
