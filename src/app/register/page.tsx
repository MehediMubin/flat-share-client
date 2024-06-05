"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
   username: string;
   email: string;
   password: string;
   "confirm-password": string;
}

const Page = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<FormData>();
   const password = watch("password", "");
   const router = useRouter();

   const onSubmit: SubmitHandler<FormData> = async (data, e) => {
      try {
         const response = await fetch(`${process.env.BACKEND_URL}/register`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         const responseData = await response.json();

         if (response.ok) {
            toast.success("user has been created successfully");
            // after the successfull registration, we can redirect the user to the login page
            router.push("/login");
            if (e) e.target.reset();
         } else {
            if (Object.keys(responseData?.errorDetails).length == 0) {
               toast.error(responseData?.message);
            } else {
               toast.error(
                  `${responseData?.errorDetails?.issues[0].message} in ${responseData?.errorDetails?.issues[0].field}`
               );
            }
         }
      } catch (error) {
         toast.error(`An error occurred: ${(error as Error)?.message}`);
      }
   };

   return (
      <div>
         <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
               <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Sign Up for a New Account
                  </h2>
               </div>
               <form
                  className="mt-8 space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
               >
                  <div className="rounded-md shadow-sm space-y-4">
                     <div>
                        <label htmlFor="username" className="sr-only">
                           Username
                        </label>
                        <input
                           {...register("username", { required: true })}
                           id="username"
                           name="username"
                           type="text"
                           autoComplete="username"
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Username"
                        />
                     </div>
                     <div>
                        <label htmlFor="email" className="sr-only">
                           Email
                        </label>
                        <input
                           {...register("email", { required: true })}
                           id="email"
                           name="email"
                           type="email"
                           autoComplete="email"
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Email"
                        />
                     </div>
                     <div>
                        <label htmlFor="password" className="sr-only">
                           Password
                        </label>
                        <input
                           {...register("password", { required: true })}
                           id="password"
                           name="password"
                           type="password"
                           autoComplete="new-password"
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Password"
                        />
                     </div>
                     <div>
                        <label htmlFor="confirm-password" className="sr-only">
                           Confirm Password
                        </label>
                        <input
                           {...register("confirm-password", {
                              required: true,
                              validate: (value) =>
                                 value === password ||
                                 "The passwords do not match",
                           })}
                           id="confirm-password"
                           name="confirm-password"
                           type="password"
                           autoComplete="new-password"
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Confirm Password"
                        />
                        {errors["confirm-password"] &&
                           typeof errors["confirm-password"].message ===
                              "string" && (
                              <p className="text-red-500 text-xs italic">
                                 {errors["confirm-password"].message}
                              </p>
                           )}
                     </div>
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="text-sm">
                        Already have an account?{" "}
                        <Link
                           href="/login"
                           className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                           Sign in
                        </Link>
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                        Sign up
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Page;
