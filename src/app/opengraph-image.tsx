import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

export const alt = `${siteConfig.name} — ${siteConfig.title}, payments and fraud systems`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stats = [
  { value: "1,000+", label: "fraud rules per transaction" },
  { value: "< 1 s", label: "decision time" },
  { value: "Millions", label: "transactions a week" },
  { value: "100+", label: "developers mentored" },
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0a0f1c 0%, #14213a 100%)",
          color: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#2dd4bf", letterSpacing: 2 }}>
            NYMCARD · DUBAI · REMOTE
          </div>
          <div style={{ fontSize: 96, fontWeight: 800, marginTop: 16 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 40, color: "#7ee8d8", marginTop: 8 }}>
            {`${siteConfig.title} · Payments & Fraud Systems`}
          </div>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "24px 28px",
                borderRadius: 24,
                border: "1px solid #2b3b57",
                background: "#0f1a2e",
              }}
            >
              <div style={{ fontSize: 48, fontWeight: 800, color: "#2dd4bf" }}>
                {s.value}
              </div>
              <div style={{ fontSize: 22, color: "#a9bad2", marginTop: 6 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
