'use client'

import { useAuthContext } from "@/context/authContext"
import { auth } from "@/utils/firebase/firebase-service"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"
import PulseLoader from "react-spinners/PulseLoader"
import Cookie from 'js-cookie'
import { Loading } from "@/components/Loading"
import Header from "@/components/Header"
import MenuCustom from "@/components/Menu"
import CardCustom from "@/components/Card"


export default function Home() {

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { userAuth, handleStateUserChange, handleClearChange } = useAuthContext()




  useEffect(() => {
    if (!userAuth) {
      router.push('/')
    }
  }, [router, userAuth])


  if (!userAuth) {
    return (
      <Loading />
    )
  }

  return (
    <div className="flex flex-col h-screen  ">
      <Header />

      <MenuCustom />
      <div className="flex flex-col w-full h-auto  bg-slate-100  gap-1">
        <CardCustom />
      </div>

    </div>
  )
}