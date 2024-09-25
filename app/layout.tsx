import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import { cn } from "@/lib/utils";
import { NextUIProviders } from "@/providers/nextjs-provider";
import Thumbnail from "@/public/Thumbnail.jpeg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jennesy",
  description:
    "turn is teaming up with Cookies and Lemonnade storefronts to dole out custom longboards in our go long!(board) giveaway. Every location has one (1) completely unique design, and with no limit to how many you can win… can you collect them all?!",
  metadataBase: new URL("https://jennessy.net"),
  openGraph: {
    title: `Jennesy`,
    description: "Jennsey is a real estate contact center.",
    url: "https://jennessy.net",
    siteName: "turn",
    images: [
      {
        url: Thumbnail.src,
        width: 200,
        height: 200,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jennesy",
    description: "Jennsey is a real estate contact center.",

    images: [Thumbnail.src],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body className={cn("bg-[#111928]", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NextUIProviders>{children}</NextUIProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
