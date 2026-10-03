"use client";

import { useEffect, useRef } from "react";

const SPACING = 36;
const REPEL_RADIUS = 110;
const REPEL_STRENGTH = 42;
const LERP = 0.14;

export default function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let rafId;
    let dots = [];
    let cols = 0;
    let rows = 0;

    // Mouse position in page coordinates
    const mouse = { x: -9999, y: -9999 };

    function buildGrid() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      cols = Math.ceil(w / SPACING) + 1;
      rows = Math.ceil(h / SPACING) + 1;

      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const isAccent = (c * 7 + r * 13) % 11 === 0;
          dots.push({
            bx: c * SPACING,       // base x
            by: r * SPACING,       // base y
            ox: 0,                 // current offset x
            oy: 0,                 // current offset y
            col: c,
            row: r,
            radius: isAccent ? 2 : 1.4,
            fill: isAccent
              ? "rgba(16,185,129,0.55)"
              : "rgba(16,185,129,0.35)",
          });
        }
      }
    }

    function draw() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.clearRect(0, 0, w, h);

      // Convert mouse page coords → canvas-local coords
      const rect = canvas.getBoundingClientRect();
      const mx = mouse.x - rect.left;
      const my = mouse.y - rect.top;

      // Is mouse far outside the canvas? treat as infinity
      const mouseActive =
        mx > -60 && mx < w + 60 && my > -60 && my < h + 60;

      // Update offsets (repel + lerp spring-back)
      for (const dot of dots) {
        const cx = dot.bx + dot.ox;
        const cy = dot.by + dot.oy;

        let tx = 0;
        let ty = 0;

        if (mouseActive) {
          const dx = cx - mx;
          const dy = cy - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < REPEL_RADIUS && dist > 0) {
            const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
            tx = (dx / dist) * force;
            ty = (dy / dist) * force;
          }
        }

        dot.ox += (tx - dot.ox) * LERP;
        dot.oy += (ty - dot.oy) * LERP;
      }

      // Build a fast lookup: col,row → displaced position
      const pos = new Float32Array(dots.length * 2);
      for (let i = 0; i < dots.length; i++) {
        pos[i * 2] = dots[i].bx + dots[i].ox;
        pos[i * 2 + 1] = dots[i].by + dots[i].oy;
      }

      // Draw connector traces
      ctx.strokeStyle = "rgba(16,185,129,0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const { col: c, row: r } = dot;
        const x0 = pos[i * 2];
        const y0 = pos[i * 2 + 1];

        // Connect right
        if (c + 1 < cols && (c * 3 + r) % 5 < 2) {
          const ni = i + 1;
          ctx.moveTo(x0, y0);
          ctx.lineTo(pos[ni * 2], pos[ni * 2 + 1]);
        }

        // Connect down
        if (r + 1 < rows && (c + r * 3) % 5 < 2) {
          const ni = i + cols;
          ctx.moveTo(x0, y0);
          ctx.lineTo(pos[ni * 2], pos[ni * 2 + 1]);
        }
      }
      ctx.stroke();

      // Draw dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        ctx.beginPath();
        ctx.arc(pos[i * 2], pos[i * 2 + 1], dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.fill;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    let resizeTimer;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        buildGrid();
      }, 120);
    }

    buildGrid();
    rafId = requestAnimationFrame(draw);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -10,
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 55%, transparent 95%)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 55%, transparent 95%)",
      }}
    />
  );
}
