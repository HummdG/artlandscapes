import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: "#2C3B36",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#C4914E",
          fontFamily: "serif",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: "-2px",
        }}
      >
        AR
      </div>
    ),
    { ...size }
  );
}
