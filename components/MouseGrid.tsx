'use client';
import { useEffect, useRef } from 'react';

export default function MouseGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(280px circle at ${e.clientX}px ${e.clientY}px, rgba(17, 24, 39, 0.04), transparent)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div ref={ref} className="fixed inset-0 pointer-events-none z-[998]" />;
}
