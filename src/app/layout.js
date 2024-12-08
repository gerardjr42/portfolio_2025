import { LoadingProvider } from "@/contexts/LoadingContext";
import { SoundProvider } from "@/contexts/SoundContext";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import NavbarWrapper from "@/components/NavbarWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Gerardo Garcia | Portfolio",
  description: "Gerardo Garcia Jr's Personal Portfolio",
  icons: {
    icon: [{ url: "/images/favicon.png", sizes: "32x32" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased bg-[#141415]`}
      >
        <LoadingProvider>
          <SoundProvider>
            <NavbarWrapper />
            {children}
          </SoundProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
