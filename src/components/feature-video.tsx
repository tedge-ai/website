"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function FeatureVideo({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Close on Escape
  useEffect(() => {
    if (!fullscreen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setFullscreen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [fullscreen]);

  return (
    <>
      <div
        onClick={() => !failed && setFullscreen(true)}
        className="relative rounded-xl border border-rim bg-ink2 overflow-hidden aspect-[16/10] shadow-2xl shadow-black/40 cursor-pointer group"
      >
        {!failed && (
          <>
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain bg-ink2"
              onError={() => setFailed(true)}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
              <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Fullscreen modal — rendered via portal to escape stacking contexts */}
      {fullscreen && mounted && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setFullscreen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-light z-10"
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
            className="max-w-[90vw] max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  );
}
