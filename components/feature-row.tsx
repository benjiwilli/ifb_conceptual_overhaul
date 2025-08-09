import { Gauge, Shapes, Sparkles } from "lucide-react"

export default function FeatureRow() {
  const features = [
    {
      title: "Speed & Clarity",
      body: "Calm defaults, fast interactions, and predictable feedback.",
      icon: Gauge,
    },
    {
      title: "Sculpted Aesthetic",
      body: "Electric blue/cyan accents with crisp glass surfaces.",
      icon: Shapes,
    },
    {
      title: "Thoughtful Motion",
      body: "Subtle transitions that support, never distract.",
      icon: Sparkles,
    },
  ]
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {features.map((f) => (
        <div
          key={f.title}
          className="rounded-xl border border-neutral-800 p-4 bg-[rgba(12,14,18,0.6)] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
        >
          <f.icon className="size-5 text-sky-400" />
          <h3 className="mt-3 font-medium text-neutral-100">{f.title}</h3>
          <p className="mt-2 text-sm text-neutral-400">{f.body}</p>
        </div>
      ))}
    </div>
  )
}
