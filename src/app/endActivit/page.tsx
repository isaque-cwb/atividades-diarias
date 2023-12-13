'use client'
import { Center, Checkbox, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

export default function NewActivit() {
  const [isLoading, setIsLoading] = useState(false)


  return (
    <div className="flex  flex-col w-screen h-screen items-center justify-center bg-slate-100  gap-1">
      <div className=" gap-4 flex flex-col  border-2 w-[95%] h-[90%] rounded-xl p-4 bg-white max-w-2xl shadow-[-2px_2px_29px_-10px_gray]">
        <Center h='auto' color='white' bg={'#DEF7F2'} rounded={10}>
          <h1 className=" font-bold font-sans text-2xl text-gray-600 m-4">Finalizar Atividade</h1>
        </Center>
        <div className="flex justify-between ">

          <div className=" w-40">
            <p className="w-20  text-sm text-[#616C60] font-semibold">Data Final</p>
            <input type="date" className="w-36 border-2 rounded-lg p-1 outline-none" />
          </div>
          <div className="">
            <p className="w-20  text-sm text-[#616C60] font-semibold">Pacote Nº </p>
            <input type="number" disabled className="w-36 border-2 rounded-lg p-1 outline-none" />
          </div>
        </div>
        {/* <div className="">
          <p className="  text-sm text-[#616C60] font-semibold">Descrição da Atividade </p>
          <input type="number" className="w-full border-2 rounded-lg p-1 outline-none" />
        </div> */}
        <div >
          <p className="  text-sm text-[#616C60] font-semibold">Status da Atividade </p>
          <div className="border-2 rounded-lg p-2 flex flex-col gap-2">
            <Stack spacing={5} direction='row' >
              <Checkbox colorScheme='green' >
                Está em Desenvolvimento
              </Checkbox>
              <div>
                <input type="datetime-local" className="w-34   outline-none border-b-2" />
              </div>
            </Stack>
            <Stack spacing={5} direction='row' >
              <Checkbox colorScheme='green' >
                Está em Homologação
              </Checkbox>
              <div>
                <input type="datetime-local" className="w-34   outline-none border-b-2" />
              </div>
            </Stack>
            <Stack spacing={5} direction='row'>
              <Checkbox colorScheme='green' >
                Está em Produção
              </Checkbox>
              <div>
                <input type="datetime-local" className="w-34   outline-none border-b-2" />
              </div>
            </Stack>
          </div>
        </div>
        {/* <div >
          <p className="text-sm text-[#616C60] font-semibold ">Alteração de Banco </p>
          <Textarea placeholder='inserir sql de alteração no banco' height={250} />
        </div> */}
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
              Finalizar
            </span>
          }
        </button>
      </div>
    </div>
  )
}