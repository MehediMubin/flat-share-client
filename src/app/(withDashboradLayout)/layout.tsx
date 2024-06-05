"use client";
import DashboardHeader from "@/components/DashboardHeader";
import { Toaster } from "sonner";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div>
         <Toaster position="bottom-right" />
         <DashboardHeader />
         {children}
      </div>
   );
};

export default DashboardLayout;
