"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
   usernameOrEmail: string;
   password: string;
}

const Page = () => {
   const router = useRouter();
   const { from } = useParams();
   const { register, watch, handleSubmit } = useForm<FormData>();
   const [inputType, setInputType] = useState("username");
   const watchUsernameOrEmail = watch("usernameOrEmail");

   useEffect(() => {
      setInputType(watchUsernameOrEmail?.includes("@") ? "email" : "username");
   }, [watchUsernameOrEmail]);

   const onSubmit: SubmitHandler<FormData> = async (data) => {
      const newData = {
         [inputType]: data.usernameOrEmail,
         password: data.password,
      };
      console.log(newData);

      try {
         const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
         });

         const responseData = await response.json();
         const token = responseData.data.token;
         console.log(token);

         localStorage.setItem("token", token);
         if (Array.isArray(from)) {
            router.push(from[0]);
         } else if (from) {
            router.push(from);
         } else {
            router.push("/");
         }
      } catch (error) {
         console.error(
            "There has been a problem with your fetch operation:",
            error
         );
      }
   };

   return (
      <div>
         <Header />
         <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
               <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Sign in to Your Account
                  </h2>
               </div>
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-6"
               >
                  <div className="rounded-md shadow-sm space-y-4">
                     <div>
                        <label htmlFor="usernameOrEmail" className="sr-only">
                           Username or Email
                        </label>
                        <input
                           {...register("usernameOrEmail")}
                           id="usernameOrEmail"
                           type="text"
                           autoComplete="username email"
                           required
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Username or Email"
                        />
                     </div>
                     <div>
                        <label htmlFor="password" className="sr-only">
                           Password
                        </label>
                        <input
                           {...register("password")}
                           id="password"
                           type="password"
                           autoComplete="current-password"
                           required
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Password"
                        />
                     </div>
                  </div>

                  <div className="text-sm">
                     Don&apos;t have an account?{" "}
                     <Link
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        href="/register"
                     >
                        Sign up
                     </Link>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                        Sign in
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Page;
