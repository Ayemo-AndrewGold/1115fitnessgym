import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import GlobalWidgets from "@/components/layout/GlobalWidgets";

export const metadata: Metadata = {
  title: "Eleven Fifteen Fitness Gym | Sweat. Repeat. Transform.",
  description: "Train at Eleven Fifteen Fitness Gym in Ijoko, Ogun State. Explore cardio, bodybuilding, weight loss and membership options.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <SiteHeader />
        {children}
        <GlobalWidgets />
        <SiteFooter />
      </body>
    </html>
  );
}
