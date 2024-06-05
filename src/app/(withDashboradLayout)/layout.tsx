"use client";
import DashboardDrawer from "@/components/DashboardDrawer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
   return <DashboardDrawer>{children} </DashboardDrawer>;
};

export default DashboardLayout;
