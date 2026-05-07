import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
//local Fonts
const Saans = localFont({
  src: [
    { path: "../public/fonts/SaansLight.woff2", weight: "300" },
    { path: "../public/fonts/SaansRegular.woff2", weight: "400" },
    { path: "../public/fonts/SaansMedium.woff2", weight: "500" },
    { path: "../public/fonts/SaansSemiBold.woff2", weight: "600" },
    { path: "../public/fonts/SaansBold.woff2", weight: "700" },
  ],
  variable: "--font-saans",
  display: "swap",
});

//also have to create these: pro-fa-brands-400-0.woff2  pro-fa-brands-400-1.woff2 pro-fa-sharp-regular-400-4.woff2 pro-fa-sharp-regular-400-12.woff2 pro-fa-sharp-regular-400-14.woff2

export const metadata = {
  title: "Rise at Seven | Award Winning Search First Content Marketing Agency",
  description:
    "Rise at Seven | Award Winning Search First Content Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${Saans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
