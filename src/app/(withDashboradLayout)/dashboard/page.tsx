"use client";
import DashboardDrawer from "@/components/DashboardDrawer";
import withAuth from "@/utils/withAuth";
import React from "react";

const page = () => {
   return (
      <div>
         <DashboardDrawer />
      </div>
   );
};

export default withAuth(page);
