/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      inputRounded: "8px",
    },
    fontSize: {
      70: "70px",
    },
    extend: {
      gridTemplateColumns: {
        "autoColumns": "repeat(auto-fit, 320px);",
      },
      colors: {
        "colorBorderItem": "#333",
        "colorBgItem": "#262626",
        "colorAccent": "#1E6F9F",
        "colorAccentHover": "#1591d8",
        "colorText": "#F2F2F2",
        "colorTextMuted": "#808080",
        "colorCounter": "#4EA8DE",
        "colorBorderCover": "#d9d9d9"
      },
      spacing: {
        "638px": "638px",
        "800px": "800px",
        "100px": "100px",
      },
    },
  },
  plugins: [],
};
