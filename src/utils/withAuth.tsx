import { useRouter } from "next/navigation";
import React, {
   ComponentType,
   PropsWithChildren,
   useLayoutEffect,
} from "react";

const withAuth = (WrappedComponent: ComponentType<PropsWithChildren<{}>>) => {
   const WithAuthComponent = (props: PropsWithChildren<{}>) => {
      const Router = useRouter();
      const token = localStorage.getItem("token");

      useLayoutEffect(() => {
         if (!token) {
            Router.replace("/login");
         }
      }, [Router, token]);

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
