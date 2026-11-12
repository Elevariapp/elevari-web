import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elevari",
  description: "Experiencia web oficial de Elevari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
