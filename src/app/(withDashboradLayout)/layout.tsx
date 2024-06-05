"use client";

import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div>
         <DashboardHeader />
         {children}
      </div>
   );
};

export default DashboardLayout;
