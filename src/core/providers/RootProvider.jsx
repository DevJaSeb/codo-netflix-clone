import React from "react";
import { AuthProvider } from "../auth/providers/AuthProvider";

const RootProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default RootProvider;
