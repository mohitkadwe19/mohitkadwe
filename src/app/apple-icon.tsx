import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          borderRadius: "40px",
        }}
      >
        <span
          style={{
            fontSize: 90,
            fontWeight: 800,
            background: "linear-gradient(135deg, #0284c7, #6366f1)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          MK
        </span>
      </div>
    ),
    { ...size }
  );
}
