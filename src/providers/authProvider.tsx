'use client'

import { ReactNode } from "react";
import { UserProvider } from "@/context/authContext";
import { ChakraProvider } from '@chakra-ui/react'



interface UserProviderProps {
  children?: ReactNode;
}



export const Providers = ({ children }: UserProviderProps) => {
  return (

    <UserProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </UserProvider>
  )
}