"use client";
import FlatList from "@/components/FlatList";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import { AuthContext } from "@/contexts/AuthContext";
import React, { useState } from "react";

const Page = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [searchState, setSearchState] = useState({
      location: "",
      minPrice: 0,
      maxPrice: 0,
      numberOfBedrooms: 0,
   });

   return (
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
         <main>
            <Hero />
            <Search setSearchState={setSearchState}/>
            <FlatList searchState={searchState}/>
         </main>
      </AuthContext.Provider>
   );
};

export default Page;
