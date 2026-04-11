'use client';

import React from 'react';

export const SectionSkeleton = () => (
    <div className="w-full h-[600px] animate-pulse bg-slate-50 flex items-center justify-center">
        <div className="w-3/4 h-3/4 rounded-3xl bg-slate-100/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
    </div>
);
