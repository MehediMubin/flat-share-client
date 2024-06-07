"use client";
import { useRouter } from "next/navigation";
import React, {
   ComponentType,
   PropsWithChildren,
   useLayoutEffect,
} from "react";

const withAuth = (WrappedComponent: ComponentType<PropsWithChildren<{}>>) => {
   const WithAuthComponent = (props: PropsWithChildren<{}>) => {
      const Router = useRouter();
      useLayoutEffect(() => {
         const token = localStorage.getItem("token");

         if (!token) {
            Router.replace("/login");
         }
      }, [Router]);

      return <WrappedComponent {...props} />;
   };

   WithAuthComponent.displayName = `WithAuth(${getDisplayName(
      WrappedComponent
   )})`;

   return WithAuthComponent;
};

function getDisplayName(WrappedComponent: ComponentType<any>) {
   return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAuth;
