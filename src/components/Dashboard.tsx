"use client";
import withAuth from "@/utils/withAuth";

const Dashboard = () => {
   return (
      <div className=" bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
         <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
               <h1 className="text-2xl font-bold text-gray-800">
                  Admin Dashboard
               </h1>
               <p className="mt-2 text-gray-600">
                  Welcome back, Admin! Here&apos;s your dashboard.
               </p>
            </div>
         </div>
      </div>
   );
};

export default withAuth(Dashboard);
