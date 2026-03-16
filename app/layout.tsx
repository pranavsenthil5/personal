import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranav Vedasendur Senthilvel – Full Stack Developer & Researcher",
  description:
    "Personal website of Pranav Vedasendur Senthilvel – CS graduate from UMBC with experience in full-stack web development, IoT, robotics, and machine learning.",
  keywords: [
    "Pranav Senthilvel",
    "Full Stack Developer",
    "Next.js",
    "React",
    "IoT",
    "Machine Learning",
    "UMBC",
  ],
  authors: [{ name: "Pranav Vedasendur Senthilvel" }],
  openGraph: {
    title: "Pranav Vedasendur Senthilvel",
    description: "Full Stack Developer & Researcher",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-900">{children}</body>
    </html>
  );
}
