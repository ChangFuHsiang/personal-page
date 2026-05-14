'use client';
import { useState, useEffect } from 'react';
import MouseGrid from '../components/MouseGrid';
const TYPEWRITER_TEXT = 'A quiet space for projects, sharing, and small discoveries.';

export default function Home() {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < TYPEWRITER_TEXT.length) {
        setDisplayed(TYPEWRITER_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 45);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <MouseGrid />
      {/* Hero — 撐滿整個視窗高度 */}
      <div className="flex-1 flex items-center px-6 pb-24">
        <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-8">
          {/* 左：文字 */}
          <div className="flex-1">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-900 mb-4">
              Hi, I&apos;m Shine
            </p>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-gray-900 mb-6">
              I am a<br />
              <span className="text-blue-900">Software Engineer</span>
            </h1>
            <p className="text-base text-gray-400 font-mono min-h-[1.5rem]">
              {displayed}
              <span className="cursor-blink ml-[1px]">|</span>
            </p>
          </div>

          {/* 右：照片 */}
          <div className="flex-shrink-0">
            <img
              src="/profile.png"
              alt="Shine"
              className="w-60 h-60 object-cover rounded-full shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
