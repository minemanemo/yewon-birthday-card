import localFont from "next/font/local";
import "./globals.css";

const geAmsterdam = localFont({
  src: "./fonts/font.ttf",
  variable: "--font-amsterdam",
  weight: "100 700 900",
});

export const metadata = {
  title: "예원이 생일 카드",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${geAmsterdam.variable}`}>
        {children}
      </body>
    </html>
  );
}
