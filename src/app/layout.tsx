import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lead Finder",
  description: "Professional Email Lead Management App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-manrope antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"   // 🔥 default light
          enableSystem={false}  // system theme ignore
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
