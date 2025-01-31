import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./assets/scss/tailwind.scss";
import "./assets/css/material.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "#NoSpendChallenge - Stop Impulsive Buying",
  description:
    "Create challenges that will help you on your journey to financial control, avoiding consumerism and impulse buying",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body
        className={` ${manrope.variable} ${outfit.variable} font-manrope text-base text-slate-900 dark:text-white dark:bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
