"use client";
import { AuthContext } from "@/contexts/AuthContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
   title: "FlatHub - Find the perfect flatmate for your home",
   description: "Your go-to place for finding the perfect flatmate",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   return (
      <html lang="en">
         <body className={inter.className}>
            <AuthContext.Provider
               value={{ isAuthenticated, setIsAuthenticated }}
            >
               <Toaster position="bottom-right" />
               {children}
            </AuthContext.Provider>
         </body>
      </html>
   );
}
