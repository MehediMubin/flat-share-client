import React, { Dispatch, SetStateAction } from "react";

export const AuthContext = React.createContext({
   isAuthenticated: false,
   setIsAuthenticated: (() => {}) as Dispatch<SetStateAction<boolean>>,
});
