import type { Metadata } from "next";
import { ThemeProvider } from "./theme-provider";
import "./globals.css";
import { Analytics } from "./analytics";

export const metadata: Metadata = {
  title: "DARWESH | Web Developer & UI Designer",
  description:
    "Portfolio of DARWESH — Web Developer, UI Designer & Programmer specializing in Python, TypeScript, Java, and custom Discord bot development.",
  keywords: [
    "web developer",
    "ui designer",
    "python developer",
    "typescript",
    "discord bot",
    "DARWESH",
  ],
  authors: [{ name: "DARWESH" }],
  openGraph: {
    title: "DARWESH | Developer Portfolio",
    description: "Web Developer, UI Designer & Programmer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DARWESH | Developer Portfolio",
    description: "Web Developer, UI Designer & Programmer",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
