import { siteConfig, navItems } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-card-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
          <div>
            <p className="text-sm font-semibold mb-1">
              <span className="gradient-text">MK</span>
              <span className="text-accent">.</span>
            </p>
            <p className="text-xs text-muted">{siteConfig.title}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-muted/60 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-card-border">
          <p className="text-xs text-muted/60">
&copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-xs text-muted/60 hover:text-accent transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
