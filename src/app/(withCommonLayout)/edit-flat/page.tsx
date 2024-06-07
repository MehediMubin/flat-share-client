"use client";
import EditFlat from "@/components/EditFlat";
import React, { Suspense } from "react";

function EditFlatFallback() {
   return <>placeholder</>;
}

const page = () => {
   return (
      <div>
         <Suspense fallback={<EditFlatFallback />}>
            <EditFlat />
         </Suspense>
      </div>
   );
};

export default page;
