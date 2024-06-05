import Link from "next/link";

const DashboardDrawer = () => {
   return (
      <div className="h-screen bg-gray-100 flex overflow-hidden">
         <main className="flex-1 flex flex-col bg-white overflow-y-auto">
            <div className="px-8 py-6">
               <h2 className="text-2xl font-semibold mb-2">
                  Welcome to the Dashboard
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                     <h3 className="text-lg font-semibold mb-2">
                        User Management
                     </h3>
                     <Link
                        href="/dashboard/user-management"
                        className="text-blue-500 hover:underline"
                     >
                        Go to User Management
                     </Link>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                     <h3 className="text-lg font-semibold mb-2">
                        Flat Management
                     </h3>
                     <Link
                        href="/dashboard/flat-management"
                        className="text-blue-500 hover:underline"
                     >
                        Go to Flat Management
                     </Link>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
};

export default DashboardDrawer;
