'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function useLenis() {
    useEffect(() => {
        const isTouch =
            'ontouchstart' in window || navigator.maxTouchPoints > 0

        if (isTouch) return 

        const lenis = new Lenis({
            duration: 0.8,
            easing: t => 1 - Math.pow(1 - t, 4),
            smoothWheel: true,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => lenis.destroy()
    }, [])
}
