import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFooter from "@/components/ConditionalFooter";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio développeuse web",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="fr" className="dark" data-scroll-behavior="smooth">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600&display=swap"
          />
          <link
            href="https://fonts.cdnfonts.com/css/rilenheart-scottibela"
            rel="stylesheet"
          />
        </head>

        <body className="min-h-screen flex flex-col bg-black text-white">
          <Navbar />
          <main className="flex-1">{children}</main>
          <ConditionalFooter />
        </body>
      </html>
    </ViewTransitions>
  );
}
