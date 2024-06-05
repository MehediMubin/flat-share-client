"use client";

import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div>
         <Sidebar />
         {children}
      </div>
   );
};

export default DashboardLayout;
