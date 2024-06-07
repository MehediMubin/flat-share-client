"use client";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
   username: string;
   email: string;
}

const Page = () => {
   const { register, handleSubmit } = useForm<FormData>();

   const onSubmit: SubmitHandler<FormData> = async (data, e) => {
      if (data.username === "" && data.email === "") {
         toast.error("Please fill in at least one field");
         return;
      }

      try {
         const token = localStorage.getItem("token");
         if (!token) {
            toast.error("You need to be logged in to edit your profile.");
            return;
         }

         const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`,
            {
               method: "PUT",
               headers: {
                  Authorization: token,
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(data),
            }
         );

         const responseData = await response.json();
         if (!responseData.success) {
            toast.error(responseData.message);
            return;
         }

         toast.success(responseData.message);
         e?.target.reset();
      } catch (error) {
         toast.error("An error occurred. Please try again later.");
      }
   };

   return (
      <div>
         <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
               <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Edit Your Profile
                  </h2>
               </div>
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-6"
                  action="#"
                  method="POST"
               >
                  <div className="rounded-md shadow-sm space-y-4">
                     <div>
                        <label htmlFor="username" className="sr-only">
                           Username
                        </label>
                        <input
                           id="username"
                           type="text"
                           autoComplete="username"
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Username"
                           {...register("username")}
                        />
                     </div>
                     <div>
                        <label htmlFor="email" className="sr-only">
                           Email
                        </label>
                        <input
                           id="email"
                           type="email"
                           autoComplete="email"
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Email"
                           {...register("email")}
                        />
                     </div>
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="text-sm">
                        <Link
                           className="font-medium text-indigo-600 hover:text-indigo-500"
                           href="/dashboard/my-profile/edit/change-password"
                        >
                           Change Password
                        </Link>
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                        Save Changes
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Page;
