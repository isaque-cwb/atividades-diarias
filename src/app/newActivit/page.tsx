import { Center, Checkbox, Stack, Textarea } from "@chakra-ui/react";

export default function NewActivit() {
  return (
    <div className="flex  flex-col w-screen h-screen items-center justify-center bg-slate-100  gap-1">
      <div className=" gap-4 flex flex-col  border-2 w-[95%] h-[90%] rounded-xl p-4 bg-white max-w-2xl shadow-lg">
        <Center h='auto' color='white' bg={'#DEF7F2'} rounded={10}>
          <h1 className=" font-bold font-sans text-2xl text-gray-600 m-4">Nova Atividade</h1>
        </Center>
        <div className=" w-40">
          <p className="w-20  text-sm">Data</p>
          <input type="date" className="w-36 border-2 rounded-lg p-1 outline-none" />
        </div>
        <div className=" w-40">
          <p className="w-20  text-sm">Pacote Nº </p>
          <input type="number" className="w-36 border-2 rounded-lg p-1 outline-none" />
        </div>
        <div className="">

          <p className="  text-sm">Descrição da Atividade </p>
          <input type="number" className="w-full border-2 rounded-lg p-1 outline-none" />
        </div>
        <div >
          <p className="  text-sm">Status da Atividade </p>
          <div className="border-2 rounded-lg p-2 flex flex-col gap-2">
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
        <div >
          <p className="text-sm">Alteração de Banco </p>
          <Textarea placeholder='inserir sql de alteração no banco' height={250} />
        </div>
      </div>

    </div>
  )
}