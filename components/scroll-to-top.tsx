"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export default function ScrollToTop({ className = "" }: { className?: string }) {
  const { scrollY } = useScroll()
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    const unsub = scrollY.on("change", (v) => setVisible(v > 300))
    return () => unsub()
  }, [scrollY])
  const spring = useSpring(visible ? 1 : 0, { stiffness: 170, damping: 20 })

  return (
    <motion.button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 rounded-full p-2 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_-12px_oklch(var(--brand-blue))]",
        "bg-[linear-gradient(90deg,oklch(var(--brand-blue))_0%,oklch(var(--brand-cyan))_100%)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
        className,
      )}
      style={{ scale: spring, pointerEvents: visible ? "auto" : "none" }}
    >
      <ArrowUp className="size-5" />
    </motion.button>
  )
}
