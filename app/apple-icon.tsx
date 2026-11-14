import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "#09090b",
          border: "6px solid #8b5cf6",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontWeight: 800,
          borderRadius: "40px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        P
      </div>
    ),
    {
      ...size,
    }
  );
}
