import { useRouter } from "next/navigation";
import React, { ComponentType, PropsWithChildren, useEffect } from "react";

const withAuth = (WrappedComponent: ComponentType<PropsWithChildren<{}>>) => {
   const WithAuthComponent = (props: PropsWithChildren<{}>) => {
      const Router = useRouter();
      const token = localStorage.getItem("token");

      useEffect(() => {
         if (!token) {
            Router.replace("/login");
         }
      }, []);

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
