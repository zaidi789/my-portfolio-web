import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

const Icon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgb(30, 64, 175), rgb(88, 28, 135))",
          color: "white",
          fontSize: 28,
          fontWeight: 700,
          fontFamily: "Inter, sans-serif",
        }}
      >
        ZR
      </div>
    ),
    size,
  );
};

export default Icon;
