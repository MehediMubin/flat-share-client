"use client";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import { AuthContext } from "@/contexts/AuthContext";
import React, { useState } from "react";
import Header from "../components/Header";

const Page = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
         <main>
            <Header />
            <Hero />
            <Search />
         </main>
      </AuthContext.Provider>
   );
};

export default Page;
