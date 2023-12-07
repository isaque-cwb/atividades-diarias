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


export default function Home() {

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { userAuth, handleStateUserChange, handleClearChange } = useAuthContext()


  async function handleLogout() {
    handleClearChange()
    window.sessionStorage.removeItem('auth_token')
    Cookie.remove('auth_token')
    router.push('/')
  }

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
    <div className="flex flex-col h-screen items-center">
      <Header />

      <div className="flex flex-col w-full h-full place-content-center bg-slate-100  gap-2">
        <p className="border-2 rounded-md p-1 bg-gray-100">{userAuth?.user.email}</p>
        <div className="border-2 rounded-md p-1 bg-gray-100">
          <Link href={"/"}> voltar para Login</Link>

        </div>
        <div >
          <button type="button" onClick={handleLogout} className=" w-40 font-bold text-lg pt-2 border-teal-600 border-2 rounded-lg h-12 bg-teal-100 hover:bg-teal-200 transition-all duration-500 flex flex-col items-center shadow-[0_4px_9px_-4px_#0D7E94]" >
            {isLoading
              ? <PulseLoader
                className="mt-2  w-full  flex justify-center"
                color="#0D7E94"
                size={10}
                loading={isLoading}

              />
              :
              <span className=" transition duration-300 hover:scale-110  w-full">
                Sair
              </span>
            }
          </button>

        </div>
      </div>

    </div>
  )
}