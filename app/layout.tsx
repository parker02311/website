import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/app/header";

export const metadata: Metadata = {
  title: { default: "Redon Tech", template: "%s | Redon Tech" },
  description: "The best solution for you and your players.\nRedon Tech is dedicated to making free and open source projects for Roblox.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Redon Tech" />
      </head>
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
