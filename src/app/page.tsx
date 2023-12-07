'use client'

import { FormEvent, useEffect, useState } from "react"
import { logOut, login } from "../utils/firebase/auth-service"
import { auth } from "@/utils/firebase/firebase-service"
import imgPlanejamento from '../../public/planejamento.png'
import Image from "next/image"
import PulseLoader from 'react-spinners/PulseLoader'
import { useAuthContext } from "@/context/authContext"
import { Auth, User } from "firebase/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Cookie from 'js-cookie'



export default function Login() {

  const [userState, setUserState] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { userAuth, handleStateUserChange } = useAuthContext()
  const router = useRouter()

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    const form = event.target as HTMLFormElement
    const emailInput = form.elements.namedItem("email") as HTMLInputElement
    const passInput = form.elements.namedItem("pass") as HTMLInputElement

    login(emailInput.value, passInput.value).then((user) => {

      setUserState(user.user.uid)
      handleStateUserChange(user)
      window.sessionStorage.setItem('auth_token', user.user.uid)
      Cookie.set('auth_token', user.user.uid)
      setIsLoading(false)
      router.push('/Home')

    }).catch(error => {
      alert("Ocorreu um Erro ao tentarmos efetuar o seu login.")
      setIsLoading(false)
    })
  }


  useEffect(() => {

    const onChangeAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUserState(user.uid)
        }
      })
    }

    onChangeAuth()

  }, [])




  return (

    <main className="grid h-screen place-content-center bg-slate-100 ">
      <div className="  bg-white shadow-lg border-2 rounded-2xl h-[30rem] w-[25rem] flex items-center justify-center flex-col">
        <div className=" w-60 h-auto rounded-3xl p-3 bg-white overflow-hidden">
          <Image src={imgPlanejamento} alt="atividades diárias" className=" object-cover " />
        </div>
        <form className="grid gap-4 m-6" onSubmit={handleLogin} >
          <input id="email" type="email" placeholder="Digite seu email" className="outline-none border-2 border-teal-600 rounded-lg p-1 " />
          <input id="pass" type="password" placeholder="Digite sua Senha" className="outline-none border-2 border-teal-600 rounded-lg p-1" />
          <button type="submit" className="font-bold text-lg pt-2 border-teal-600 border-2 rounded-lg h-12 bg-teal-100 hover:bg-teal-200 transition-all duration-500 flex flex-col items-center shadow-[0_4px_9px_-4px_#0D7E94]" >
            {isLoading
              ? <PulseLoader
                className="mt-2  w-full  flex justify-center"
                color="#0D7E94"
                size={10}
                loading={isLoading}

              />
              :
              <span className=" transition duration-300 hover:scale-110  w-full">
                Acessar
              </span>
            }
          </button>
          {userAuth ? <Link href={"/Home"}>Entrar na Home</Link> : null}
        </form>
      </div>
    </main>
  )

}




