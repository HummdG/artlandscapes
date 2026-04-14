import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #1C2524 0%, #2C3B36 60%, #1C2524 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Decorative gold bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            background: "#C4914E",
          }}
        />
        {/* Logo mark */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 12,
            background: "rgba(196,145,78,0.15)",
            border: "2px solid #C4914E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#C4914E",
            fontFamily: "serif",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          AR
        </div>
        {/* Business name */}
        <div
          style={{
            color: "#F7F3EE",
            fontFamily: "serif",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          ARTLandscapes
        </div>
        {/* Tagline */}
        <div
          style={{
            color: "#C4914E",
            fontFamily: "sans-serif",
            fontSize: 26,
            fontWeight: 400,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: 40,
          }}
        >
          Expert Groundwork &amp; Landscaping Specialists
        </div>
        {/* Services strip */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {["Driveways", "Patios", "Resin", "Block Paving", "Fencing", "Tarmac"].map(
            (s) => (
              <div
                key={s}
                style={{
                  background: "rgba(247,243,238,0.08)",
                  border: "1px solid rgba(247,243,238,0.15)",
                  borderRadius: 6,
                  padding: "6px 16px",
                  color: "#E8DFD4",
                  fontSize: 18,
                  fontFamily: "sans-serif",
                }}
              >
                {s}
              </div>
            )
          )}
        </div>
        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 50,
            right: 100,
            color: "rgba(247,243,238,0.4)",
            fontFamily: "sans-serif",
            fontSize: 20,
          }}
        >
          artlandscapes.co.uk
        </div>
      </div>
    ),
    { ...size }
  );
}
