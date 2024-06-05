import Link from "next/link";
import React from "react";

const Sidebar = () => {
   return (
      <div className="h-screen bg-gray-800 text-white w-64 fixed top-0 left-0 overflow-y-auto">
         <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
            <nav className="mt-8">
               <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Management
               </h2>
               <ul className="mt-3 space-y-2">
                  <li>
                     <Link
                        href="/user-management"
                        className="flex items-center space-x-3 text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           className="h-6 w-6"
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
                        <span>User Management</span>
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/flat-management"
                        className="flex items-center space-x-3 text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           className="h-6 w-6"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 7h2m16 0h2m-2 0a2 2 0 00-2-2h-4a2 2 0 00-2 2H9a2 2 0 00-2-2H3a2 2 0 00-2 2h2m18 0v13a2 2 0 01-2 2H5a2 2 0 01-2-2V7m18 0v13M5 7v13a2 2 0 002 2h14a2 2 0 002-2V7H5z"
                           />
                        </svg>
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
