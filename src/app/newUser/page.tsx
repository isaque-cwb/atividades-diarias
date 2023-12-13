'use client'
import { Center } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

export default function NewUser() {
  const [isLoading, setIsLoading] = useState(false)
  const route = useRouter()

  function handleNavigation(e: FormEvent<HTMLElement>) {
    e.preventDefault()
    route.back()
  }


  return (
    <div className="flex  flex-col w-screen h-screen  items-center  bg-slate-100  gap-1">
      <div className=" gap-4 flex flex-col border-2 w-[95%] h-auto mt-3 rounded-xl p-4 bg-white max-w-2xl shadow-lg">
        <Center h='auto' color='white' bg={'#DEF7F2'} rounded={10}>
          <h1 className=" font-bold font-sans text-2xl text-gray-600 m-4">Cadastrar Usuário</h1>
        </Center>

        <div className="">
          <p className="  text-sm text-[#616C60] font-semibold">Nome </p>
          <input type="text" className="w-full border-2 rounded-lg p-1 outline-none" />
        </div>
        <div className="">
          <p className="  text-sm text-[#616C60] font-semibold">Email </p>
          <input type="email" className="w-full border-2 rounded-lg p-1 outline-none" />
        </div>
        <div className="">
          <p className="  text-sm text-[#616C60] font-semibold">Senha </p>
          <input type="email" className="w-full border-2 rounded-lg p-1 outline-none" />
        </div>

        <button onClick={handleNavigation} className="font-bold text-lg pt-2 border-teal-600 border-2 rounded-lg h-12 bg-teal-100 hover:bg-teal-200 transition-all duration-500 flex flex-col items-center shadow-[0_4px_9px_-4px_#0D7E94]" >
          {isLoading
            ? <PulseLoader
              className="mt-2  w-full  flex justify-center"
              color="#0D7E94"
              size={10}
              loading={isLoading}

            />
            :
            <span className=" transition duration-300 hover:scale-110  w-full">
              Cadastrar
            </span>
          }
        </button>
      </div>
    </div>
  )
}