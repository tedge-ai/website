"use client";

import { useState, useEffect, useRef } from "react";

export function FeatureVideo({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Manage fullscreen: lock scroll, hide navbar, close on Escape
  useEffect(() => {
    if (!fullscreen) return;

    // Create overlay directly on document.body to avoid all stacking issues
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,0.95);display:flex;align-items:center;justify-content:center;padding:24px;cursor:pointer';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = 'position:absolute;top:16px;right:16px;color:rgba(255,255,255,0.7);font-size:28px;font-weight:300;background:none;border:none;cursor:pointer;z-index:10';
    closeBtn.onmouseenter = () => closeBtn.style.color = '#fff';
    closeBtn.onmouseleave = () => closeBtn.style.color = 'rgba(255,255,255,0.7)';

    const video = document.createElement('video');
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px;cursor:default';
    video.onclick = (e) => e.stopPropagation();

    overlay.appendChild(closeBtn);
    overlay.appendChild(video);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    const close = () => setFullscreen(false);
    overlay.onclick = close;
    closeBtn.onclick = close;
    const keyHandler = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', keyHandler);

    overlayRef.current = overlay;

    return () => {
      document.removeEventListener('keydown', keyHandler);
      document.body.style.overflow = '';
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      overlayRef.current = null;
    };
  }, [fullscreen, src]);

  return (
    <div
      onClick={() => !failed && setFullscreen(true)}
      className="relative rounded-xl border border-rim overflow-hidden aspect-[16/10] shadow-2xl shadow-black/40 cursor-pointer group"
    >
      {!failed && (
        <>
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full"
            style={{ objectFit: 'contain' }}
            onError={() => setFailed(true)}
          />
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            </div>
          </div>
        </>
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink2">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-gold text-2xl">&#9654;</span>
            </div>
            <p className="text-xs text-mist font-mono">{label} preview</p>
          </div>
        </div>
      )}
    </div>
  );
}
