'use client'

import { UserProvider } from "@/context/authContext";
import { ReactNode } from "react";



interface UserProviderProps {
  children?: ReactNode;
}



export const Providers = ({ children }: UserProviderProps) => {
  return <UserProvider>{children}</UserProvider>
}