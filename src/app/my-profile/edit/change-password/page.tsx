"use client";
import Header from "@/components/Header";
import React from "react";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
   currentPassword: string;
   newPassword: string;
   confirmPassword: string;
}

const Page = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   const onSubmit: SubmitErrorHandler<FormData> = async (data, e) => {
      try {
         const token = localStorage.getItem("token");
         if (!token) {
            toast.error("You need to be logged in to edit your profile.");
            return;
         }

         const newData = {
            currentPassword: data.currentPassword,
            newPassword: data.newPassword,
         };

         const response = await fetch("http://localhost:5000/api/profile", {
            method: "PUT",
            headers: {
               Authorization: token,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
         });

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
         <Header />
         <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
               <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Change Your Password
                  </h2>
               </div>
               <form
                  className="mt-8 space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
               >
                  <div className="rounded-md shadow-sm space-y-4">
                     <div>
                        <label htmlFor="current-password" className="sr-only">
                           Current Password
                        </label>
                        <input
                           {...register("currentPassword", { required: true })}
                           id="current-password"
                           type="password"
                           autoComplete="current-password"
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Current Password"
                        />
                     </div>
                     <div>
                        <label htmlFor="new-password" className="sr-only">
                           New Password
                        </label>
                        <input
                           {...register("newPassword", { required: true })}
                           id="new-password"
                           type="password"
                           autoComplete="new-password"
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="New Password"
                        />
                     </div>
                     <div>
                        <label htmlFor="confirm-password" className="sr-only">
                           Confirm Password
                        </label>
                        <input
                           {...register("confirmPassword", {
                              required: true,
                              validate: (value) =>
                                 value === watch("newPassword") ||
                                 "The passwords do not match",
                           })}
                           id="confirm-password"
                           type="password"
                           autoComplete="new-password"
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Confirm Password"
                        />
                        {errors.confirmPassword &&
                           typeof errors.confirmPassword.message ===
                              "string" && (
                              <p className="text-red-500 text-xs italic">
                                 {errors.confirmPassword.message}
                              </p>
                           )}
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                        Change Password
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Page;
