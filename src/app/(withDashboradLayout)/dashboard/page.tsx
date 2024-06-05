"use client";
import Sidebar from "@/components/Sidebar";
import withAuth from "@/utils/withAuth";
import React from "react";

const page = () => {
   return (
      <div>
         <h1>Hello brother</h1>
      </div>
   );
};

export default withAuth(page);
