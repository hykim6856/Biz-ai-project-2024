"use client";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ Children }) => (
  <SessionProvider>{Children}</SessionProvider>
);

export default AuthProvider;
