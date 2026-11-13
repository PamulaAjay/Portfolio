import type { Metadata } from "next";
import "./globals.css";
import "./polish.css";

export const metadata: Metadata = {
  title: "Ajay Pamula — Frontend Developer",
  description: "Frontend developer in Hyderabad building responsive web and mobile interfaces with React, React Native, and Next.js.",
  openGraph: { title: "Ajay Pamula — Frontend Developer", description: "React, React Native, and Next.js. Thoughtful interfaces for web and mobile.", type: "website", locale: "en_IN" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
