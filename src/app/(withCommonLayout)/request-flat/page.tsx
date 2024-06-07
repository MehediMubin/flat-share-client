"use client";
import RequestFlat from "@/components/RequestFlat";
import { Suspense } from "react";

function RequestFlatFallback() {
   return <>placeholder</>;
}

const page = () => {
   return (
      <div>
         <Suspense fallback={<RequestFlatFallback />}>
            <RequestFlat />
         </Suspense>
      </div>
   );
};

export default page;
