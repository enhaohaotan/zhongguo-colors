import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const enFont = localFont({
  src: "/SedanSC-Regular.ttf",
  variable: "--font-en",
});
const zhFont = localFont({ src: "/KX_47043_15.ttf", variable: "--font-zh" });

export const metadata: Metadata = {
  title: "ZHONGGUO COLORS",
  description:
    "Color data from book 《中国传统色 故宫里的色彩美学》——郭浩 李健明",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      {/* <body className={enFont.className}> */}
      <body
        className={`flex justify-center ${enFont.variable} ${zhFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
