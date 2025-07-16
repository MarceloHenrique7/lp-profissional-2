import type { Metadata } from "next";
import { Slabo_27px } from "next/font/google";
import "./globals.css";
import WhatsappButton from "@/components/WhatsappButton"; // ajuste o path se necessário

const slabo = Slabo_27px({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-slabo",
});

export const metadata: Metadata = {
  title: "Henrique.dev - Portfólio",
  description: "Transformo ideias em soluções digitais de alto impacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${slabo.variable} antialiased`}>
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
