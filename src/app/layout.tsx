import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { MainLayout } from "../layout";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Smurf Dashboard",
  description: "Your decentralized application dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
