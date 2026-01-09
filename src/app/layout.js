import { Anton, Outfit } from "next/font/google"; // Imported new fonts
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Providers from "@/components/provider";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "VITopia '25 | VIT-AP University - Amaravati",
  description: "VIT AP International Techfest V-TAPP 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-JQ20KKEJY2" />
      <body className={`${anton.variable} ${outfit.variable} antialiased bg-background text-foreground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
