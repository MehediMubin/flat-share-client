"use client";
import withAuth from "@/utils/withAuth";
import React from "react";

const page = () => {
   return <div>Welcome to Admin Dashboard</div>;
};

export default withAuth(page);
