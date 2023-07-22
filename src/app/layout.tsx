import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Navbar from "@/components/navbar/Navbar";
import { cn } from "@/lib/utils";
import ReduxProvider from "@/components/providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });
const clash = localFont({
  src: [
    {
      path: "../../public/assets/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/assets/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../../public/assets/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  title: "Musica | Ad-free music experience",
  description: "An open-source ad-free music experience",
  generator: "Next.js",
  applicationName: "Musica",
  keywords: ["music", "lo-fi", "open-source", "chill", "relax"],
  category: "music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" translate="no" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🤟undefined</text></svg>"
        />
      </head>
      <body
        className={cn(
          "scroll-smooth antialiased",
          inter.className,
          clash.variable
        )}
      >
        <ReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
