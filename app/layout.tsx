import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import { cn } from "@/lib/utils";
import { NextUIProviders } from "@/providers/nextjs-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image Generating AI Tool",
  description: "Generate images using AI by Corporatica",
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
