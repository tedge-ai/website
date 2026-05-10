"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function FeatureVideo({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Close on Escape + lock body scroll
  useEffect(() => {
    if (!fullscreen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setFullscreen(false); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [fullscreen]);

  return (
    <>
      <div
        onClick={() => !failed && setFullscreen(true)}
        className="relative rounded-xl overflow-hidden aspect-[16/10] cursor-pointer group"
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

      {/* Fullscreen modal */}
      {fullscreen && mounted && createPortal(
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', cursor: 'pointer', isolation: 'isolate' }}
          onClick={() => setFullscreen(false)}
        >
          <button
            style={{ position: 'absolute', top: '16px', right: '16px', color: 'rgba(255,255,255,0.7)', fontSize: '28px', fontWeight: 300, zIndex: 10, background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setFullscreen(false)}
          >
            ✕
          </button>
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '8px' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  );
}
