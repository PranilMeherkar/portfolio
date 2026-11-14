import { ImageResponse } from "next/og";

export const alt = "Pranil Meherkar — Senior Frontend Developer & Acting Technical Lead";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#09090b",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow effects */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(9, 9, 11, 0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.18) 0%, rgba(9, 9, 11, 0) 70%)",
          }}
        />

        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: "9999px",
              border: "1px solid rgba(139, 92, 246, 0.4)",
              backgroundColor: "rgba(139, 92, 246, 0.12)",
              color: "#c4b5fd",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Acting Technical Lead · Mumbai, IN
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#a1a1aa",
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "monospace",
              letterSpacing: "-0.02em",
            }}
          >
            PRANIL<span style={{ color: "#a78bfa" }}>.</span>
          </div>
        </div>

        {/* Center: Main identity */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "66px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Pranil Meherkar
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              lineHeight: 1.35,
              color: "#d4d4d8",
              maxWidth: "960px",
            }}
          >
            Senior Frontend Developer specializing in React.js & Next.js architecture,
            high-performance web applications, and technical team leadership (18–20 engineers).
          </div>
        </div>

        {/* Bottom tags & stats */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
            width: "100%",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Core Web Vitals"].map((skill) => (
              <div
                key={skill}
                style={{
                  display: "flex",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#e4e4e7",
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                {skill}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              color: "#a78bfa",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            3.9 Years Experience
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
