"use client";

import { useEffect, useRef } from "react";

interface VideoBannerProps {
  src: string;
  playbackRate?: number;
}

export function VideoBanner({ src, playbackRate = 1 }: VideoBannerProps) {
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
    </div>
  );
}
