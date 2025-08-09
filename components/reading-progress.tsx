"use client"

import * as React from "react"

export default function ReadingProgress() {
  const [progress, setProgress] = React.useState(0)
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrollTop = h.scrollTop || document.body.scrollTop
      const height = h.scrollHeight - h.clientHeight
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-[linear-gradient(90deg,oklch(61%_0.22_262),oklch(79%_0.17_234))]"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <span className="sr-only" aria-live="polite">{`Reading progress ${Math.round(progress)}%`}</span>
    </div>
  )
}
