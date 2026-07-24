"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  label: string;
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // If there's no activeId initially, set it to the first item
    if (items.length > 0 && !activeId) {
      setActiveId(items[0].id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px" } // Triggers when element is in upper 40% of the screen
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="w-full">
      <h4 className="text-xs font-bold text-zinc-400 tracking-widest uppercase mb-4">
        Neste artigo
      </h4>
      <ul className="flex flex-col border-l-2 border-zinc-100">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                className={`block py-2.5 pl-5 pr-2 text-sm md:text-base leading-snug transition-colors ${
                  isActive
                    ? "text-zinc-900 font-bold"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {isActive && (
                  <span className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-[#d75310] rounded-r-sm" />
                )}
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
