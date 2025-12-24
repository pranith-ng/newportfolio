// hooks/useLenis.js
'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,                // smaller = faster, snappier
            easing: t => 1 - Math.pow(1 - t, 4),  // fast-to-slow easing (like GSAP power4.out)
            smooth: true,
            wheelMultiplier: 1,         // scroll feels more responsive
            gestureMultiplier: 1,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);
}
