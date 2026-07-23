"use client";

import { useEffect, useRef } from "react";

interface VideoBannerProps {
  src: string;
  playbackRate?: number;
  title?: string;
}

export function VideoBanner({ src, playbackRate = 1, title }: VideoBannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <div className="relative w-full h-[200px] md:h-[250px] z-0 overflow-hidden">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="object-cover w-full h-full"
      >
        <source src={src} type="video/mp4" />
      </video>
      {title && (
        <div className="absolute inset-0 flex items-center justify-start w-full max-w-[1920px] mx-auto px-6 md:px-14 lg:px-24">
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-widest uppercase mt-8 md:mt-12"
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}
          >
            {title}
          </h1>
        </div>
      )}
    </div>
  );
}
