import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "FlatHub - Find the perfect flatmate for your home",
   description: "Your go-to place for finding the perfect flatmate",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Toaster position="bottom-right" />
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
