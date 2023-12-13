'use client'
import { Center } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

export default function NewActivit() {
  const [isLoading, setIsLoading] = useState(false)
  const route = useRouter()

  function handleNavigation() {
    route.back()
  }
  return (
    <div className="flex  flex-col w-screen h-screen items-center justify-center bg-slate-100  gap-1">
      <div className=" gap-4 flex flex-col  border-2 w-[95%] h-[90%] rounded-xl p-4 bg-white max-w-2xl shadow-[-2px_2px_29px_-10px_gray]">
        <Center h='auto' color='white' bg={'#DEF7F2'} rounded={10}>
          <h1 className=" font-bold font-sans text-2xl text-gray-600 m-4">Nova Atividade</h1>
        </Center>
        <div className=" w-40">
          <p className="w-20  text-sm text-[#616C60] font-semibold">Data Início</p>
          <input type="date" className="w-36 border-2 rounded-lg p-1 outline-none" />
        </div>
        <div className=" w-40">
          <p className="w-20  text-sm text-[#616C60] font-semibold">Pacote Nº </p>
          <input type="number" className="w-36 border-2 rounded-lg p-1 outline-none" />
        </div>
        <div className="">

          <p className="  text-sm text-[#616C60] font-semibold">Descrição da Atividade </p>
          <input type="text" className="w-full border-2 rounded-lg p-1 outline-none" />
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