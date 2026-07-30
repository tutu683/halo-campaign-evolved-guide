import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0f0c",
        border: "4px solid #9abf57",
        color: "#b8dc70",
        fontSize: 28,
        fontWeight: 800,
      }}
    >
      CE
    </div>,
    size,
  );
}
