"use client";
import UserCard from "@/components/UserCard";
import React, { useEffect, useState } from "react";

export interface User {
   _id: string;
   username: string;
   email: string;
   status: string;
   role: string;
}

const UserManagement = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      const token = localStorage.getItem("token");

      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/all`, {
         headers: {
            Authorization: `${token}`,
         },
      })
         .then((response) => response.json())
         .then((data) => setUsers(data.data))
         .catch((error) => console.error(error));
   }, []);

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
         {users.map((user: User, index) => (
            <UserCard
               key={user._id}
               _id={user._id}
               username={user.username}
               email={user.email}
               role={user.role}
               status={user.status}
            />
         ))}
      </div>
   );
};

export default UserManagement;
