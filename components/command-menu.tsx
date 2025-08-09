"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { posts, projects } from "@/lib/data"
import { Home, FolderGit2, PenSquare, User2, MessageCircle, Rocket, Moon, Laptop, Sun } from "lucide-react"

export default function CommandMenu() {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("open-command", onOpen as EventListener)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("open-command", onOpen as EventListener)
    }
  }, [])

  function go(href: string) {
    router.push(href)
    setOpen(false)
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Command Menu"
      description="Quick actions, pages, and search"
    >
      <CommandInput placeholder="Search pages, posts, or projects…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => go("/")}>
            <Home className="mr-2 h-4 w-4" /> Home
          </CommandItem>
          <CommandItem onSelect={() => go("/projects")}>
            <FolderGit2 className="mr-2 h-4 w-4" /> Projects
          </CommandItem>
          <CommandItem onSelect={() => go("/blog")}>
            <PenSquare className="mr-2 h-4 w-4" /> Blog
          </CommandItem>
          <CommandItem onSelect={() => go("/about")}>
            <User2 className="mr-2 h-4 w-4" /> About
          </CommandItem>
          <CommandItem onSelect={() => go("/contact")}>
            <MessageCircle className="mr-2 h-4 w-4" /> Contact
          </CommandItem>
          <CommandItem onSelect={() => go("/demo")}>
            <Rocket className="mr-2 h-4 w-4" /> Live Demo
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => setTheme("light")}>
            <Sun className="mr-2 h-4 w-4" /> Light
          </CommandItem>
          <CommandItem onSelect={() => setTheme("dark")}>
            <Moon className="mr-2 h-4 w-4" /> Dark
          </CommandItem>
          <CommandItem onSelect={() => setTheme("system")}>
            <Laptop className="mr-2 h-4 w-4" /> System
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Projects">
          {projects.slice(0, 8).map((p) => (
            <CommandItem key={p.slug} onSelect={() => go(`/projects/${p.slug}`)}>
              <FolderGit2 className="mr-2 h-4 w-4" /> {p.title}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Posts">
          {posts.slice(0, 8).map((p) => (
            <CommandItem key={p.slug} onSelect={() => go(`/blog/${p.slug}`)}>
              <FolderGit2 className="mr-2 h-4 w-4" /> {p.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
