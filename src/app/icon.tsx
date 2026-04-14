import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#2C3B36",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#C4914E",
          fontFamily: "serif",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "-0.5px",
        }}
      >
        AR
      </div>
    ),
    { ...size }
  );
}
