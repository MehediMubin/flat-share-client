import Hero from "@/components/Hero";
import Search from "@/components/Search";
import React from "react";
import Header from "../components/Header";

const page = () => {
   return (
      <div>
         <Header />
         <Hero />
         <Search />
      </div>
   );
};

export default page;
