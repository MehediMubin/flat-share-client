"use client";
import FlatList from "@/components/FlatList";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import React, { useState } from "react";

const HomePage = () => {
   const [searchState, setSearchState] = useState({
      location: "",
      minPrice: 0,
      maxPrice: 0,
      numberOfBedrooms: 0,
   });
   return (
      <div>
         <Hero />
         <Search setSearchState={setSearchState} />
         <FlatList searchState={searchState} />
      </div>
   );
};

export default HomePage;
