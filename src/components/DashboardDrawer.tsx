import Image from "next/image";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function DashboardDrawer({ children }) {
   const [mobileOpen, setMobileOpen] = useState(false);
   const [isClosing, setIsClosing] = useState(false);

   const handleDrawerClose = () => {
      setIsClosing(true);
      setMobileOpen(false);
   };

   const handleDrawerTransitionEnd = () => {
      setIsClosing(false);
   };

   const handleDrawerToggle = () => {
      if (!isClosing) {
         setMobileOpen(!mobileOpen);
      }
   };

   const isLoading = false;

   return (
      <div className="flex">
         <div className="fixed w-full bg-gray-200 border-b border-gray-300 py-2">
            <div className="flex justify-between items-center px-4">
               <button
                  className="mr-2 sm:hidden"
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
               >
                  <svg
                     className="h-6 w-6 text-primary-main"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                     />
                  </svg>
               </button>
               <div className="flex justify-between items-center w-full">
                  <div>
                     <p className="text-sm text-gray-600 truncate">Hi, Admin</p>
                     <p className="text-lg text-primary-main truncate">
                        Welcome to PH Health Care!
                     </p>
                  </div>
                  <div className="flex items-center space-x-4">
                     <button className="bg-white rounded-full p-2">
                        <svg
                           className="h-6 w-6 text-gray-500"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                           />
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12c0-4.968-4.032-9-9-9s-9 4.032-9 9c0 1.463.352 2.838.968 4.062M12 19l9 2-9-18-9 18 9-2zm0 0v.01"
                           />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="w-60 sm:block hidden">
            <Sidebar />
         </div>
         <div className="w-full sm:pl-60 pt-14 px-4">{children}</div>
      </div>
   );
}
