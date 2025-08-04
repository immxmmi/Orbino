"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function ComingSoonContent() {
  return (
    <div className="relative z-10 text-center max-w-3xl">
      <Badge className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full py-1 px-4 shadow-lg animate-pulse">
        🚀 DinerTap – Coming Soon
      </Badge>
      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
        Erstelle dein Business – ganz einfach mit DinerTap
      </h1>
      <p className="mt-6 text-lg md:text-lg">
        Starte jetzt und verwalte dein digitales Restaurant – effizient, modern
        und intuitiv.
      </p>
      <div className="mt-12 flex items-center justify-center gap-4">
        <Link href="/dashboard">
          <InteractiveHoverButton className="rounded-full text-base px-6 py-3">
            Demo ansehen
          </InteractiveHoverButton>
        </Link>
      </div>
    </div>
  );
}