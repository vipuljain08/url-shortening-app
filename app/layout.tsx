import Footer from "@/components/Sections/Footer";
import Header from "@/components/Sections/Header";
import { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Shortly",
  description:
    "A url shortner page where you can shorten your long urls with ease.",
  keywords: ["shortly", "url", "shortner", "shorten", "link"],
  creator: "Vipul Jain",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#eff1f7",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <Toaster position="top-center" richColors />
        {children}
        <Footer />
      </body>
    </html>
  );
}
