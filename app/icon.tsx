import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 14,
          background: "#FBBF24",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Taxi sign on roof */}
        <div
          style={{
            position: "absolute",
            top: 7,
            left: "50%",
            transform: "translateX(-50%)",
            background: "white",
            borderRadius: 4,
            width: 28,
            height: 11,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 7,
            fontWeight: 900,
            color: "#0f172a",
            letterSpacing: 0.5,
          }}
        >
          TAXI
        </div>

        {/* Car cabin */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 8,
            right: 8,
            height: 16,
            background: "#0f172a",
            borderRadius: "4px 4px 0 0",
            clipPath: "polygon(18% 100%, 26% 0%, 74% 0%, 82% 100%)",
          }}
        />

        {/* Car body */}
        <div
          style={{
            position: "absolute",
            top: 34,
            left: 5,
            right: 5,
            height: 16,
            background: "#0f172a",
            borderRadius: 5,
          }}
        />

        {/* Left wheel */}
        <div
          style={{
            position: "absolute",
            bottom: 5,
            left: 9,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#1e293b",
            border: "3px solid #475569",
          }}
        />

        {/* Right wheel */}
        <div
          style={{
            position: "absolute",
            bottom: 5,
            right: 9,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#1e293b",
            border: "3px solid #475569",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
