"use client";

import { useState } from "react";

export function FeatureVideo({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative rounded-xl border border-rim bg-ink2 overflow-hidden aspect-[16/10] shadow-2xl shadow-black/40">
      {!failed && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
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
