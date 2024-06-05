import Link from "next/link";
import React from "react";

const Sidebar = () => {
   return (
      <div className="h-screen bg-gray-800 text-white w-64 fixed top-0 left-0 overflow-y-auto">
         <div className="p-6">
            <Link className="text-2xl font-semibold mb-2" href="/dashboard">
               Dashboard
            </Link>
            <nav className="mt-8">
               <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Management
               </h2>
               <ul className="mt-3 space-y-2">
                  <li>
                     <Link
                        href="/dashboard/user-management"
                        className="flex items-center space-x-3 text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
                     >
                        <span>User Management</span>
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/dashboard/flat-management"
                        className="flex items-center space-x-3 text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
                     >
                        <span>Flat Management</span>
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   );
};

export default Sidebar;
