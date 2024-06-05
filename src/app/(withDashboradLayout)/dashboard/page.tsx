"use client";
import DashboardDrawer from "@/components/DashboardDrawer";
import Sidebar from "@/components/Sidebar";
import withAuth from "@/utils/withAuth";
import React from "react";

const page = () => {
   return (
      <div className="w-4/5 ml-auto h-screen"
        style={
          {
            border: "1px solid black",
          }
        }
      >
         <h1 className="text-right">Hello brother</h1>
      </div>
   );
};

export default withAuth(page);
