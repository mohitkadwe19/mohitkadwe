"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun, Monitor } from "lucide-react";
import { navItems } from "@/data/portfolio";

type Theme = "system" | "light" | "dark";

function resolveTheme(theme: Theme): boolean {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return theme === "dark";
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const t = saved && ["system", "light", "dark"].includes(saved) ? saved : "system";
    setTheme(t);
    document.documentElement.classList.toggle("dark", resolveTheme(t));

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const current = localStorage.getItem("theme") as Theme | null;
      if (!current || current === "system") {
        document.documentElement.classList.toggle("dark", mq.matches);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchTheme = (t: Theme) => {
    if (t === theme) return;
    setTheme(t);
    localStorage.setItem("theme", t);

    // Enable smooth transition on all elements
    document.documentElement.classList.add("theme-switching");
    // Switch theme
    document.documentElement.classList.toggle("dark", resolveTheme(t));
    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove("theme-switching");
    }, 550);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const themeOptions: { value: Theme; icon: typeof Sun }[] = [
    { value: "system", icon: Monitor },
    { value: "light", icon: Sun },
    { value: "dark", icon: Moon },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter] duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/60 dark:bg-white/[0.05] border-b border-black/[0.06] dark:border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8">
          <motion.a
            href="#"
            className="text-lg font-bold"
            whileHover={{ scale: 1.03 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="gradient-text">MK</span>
            <span className="text-accent">.</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-1.5 text-[13px] font-medium text-foreground/50 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Theme toggle pill */}
          <div className="flex items-center rounded-full p-[3px] border border-black/[0.06] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.05]">
            {themeOptions.map(({ value, icon: Icon }) => (
              <button
                key={value}
                onClick={() => switchTheme(value)}
                className={`relative p-[7px] rounded-full transition-all duration-200 ${
                  theme === value
                    ? "bg-white dark:bg-white/[0.15] shadow-sm text-foreground"
                    : "text-foreground/30 hover:text-foreground/60"
                }`}
                aria-label={`${value} theme`}
              >
                <Icon size={13} strokeWidth={2} />
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-foreground/50 hover:text-foreground md:hidden transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
            className="md:hidden backdrop-blur-xl bg-white/80 dark:bg-white/[0.05] border-t border-black/[0.06] dark:border-white/[0.06]"
          >
            <div className="flex flex-col px-6 py-2 gap-0.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-left text-[13px] font-medium text-foreground/50 hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
