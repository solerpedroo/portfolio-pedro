import { ImageResponse } from "next/og";
export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#030711",
        color: "#f5f8ff",
        display: "flex",
        flexDirection: "column",
        padding: "76px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 27,
          letterSpacing: "4px",
          color: "#5aabff",
        }}
      >
        PEDRO SOLER / PORTFOLIO
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 92,
          letterSpacing: "-5px",
          lineHeight: 1.05,
        }}
      >
        <span>Engineering</span>
        <span style={{ color: "#5aabff" }}>what’s next.</span>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#a6b5cc" }}>
        SOFTWARE · AI · COMPUTER VISION
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
