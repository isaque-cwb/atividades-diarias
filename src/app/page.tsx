'use client'

import { FormEvent, useEffect, useState } from "react"
import { logOut, login } from "../utils/firebase/auth-service"
import { auth } from "@/utils/firebase/firebase-service"






export default function Login() {

  const [userState, setUserState] = useState('')


  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const emailInput = form.elements.namedItem("email") as HTMLInputElement
    const passInput = form.elements.namedItem("pass") as HTMLInputElement

    login(emailInput.value, passInput.value).then((user) => {
      //window.localStorage.setItem("user-session", user.user.uid)
      setUserState(user.user.uid)
      console.log("Login realizado com sucesso!")
    }).catch(error => {
      alert("Ocorreu um Erro ao tentarmos efetuar o seu login.")
    })
  }

  async function authOut() {
    setUserState('')
    logOut()
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

  if (userState) {
    return (
      <main onSubmit={handleLogin} className="grid h-screen place-content-center bg-slate-100 ">
        <button onClick={authOut}>Sair</button>
      </main>
    )
  }

  return (

    <main className="grid h-screen place-content-center bg-slate-100 ">
      <form className="grid gap-4" onSubmit={handleLogin} >
        <input id="email" type="email" placeholder="Digite seu email" />
        <input id="pass" type="password" placeholder="Digite sua Senha" />
        <button type="submit" >Acessar</button>
      </form>
    </main>
  )

}
