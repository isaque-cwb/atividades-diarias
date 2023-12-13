import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Stack, StackDivider, Box, Divider, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Center } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'


export default function CardCustom() {
  const [isLoading, setIsLoading] = useState(false)
  const route = useRouter()

  function handleRoutes(tela: string) {
    route.push(tela)
  }


  const data = [
    1, 2, 3
  ]
  return (
    < >
      <div className=' bg-white m-1 rounded-lg  p-1'>
        <Card className='boder-2'>
          <CardHeader>
            <Heading size='md'>Atividades Iniciadas</Heading>
          </CardHeader>

          {data.map((item, index) => {

            return (
              <CardBody key={index} className='border-2 rounded-lg m-2'>
                <Stack spacing='2'>
                  <p>
                    Atividade nº : 0001
                  </p>
                  <Box >
                    <div className='flex justify-between border p-[0.15rem] rounded-sm '>
                      <Heading size='xs' textTransform='uppercase' width={'100%'} >
                        <p>
                          Data início: 07/12/2023
                        </p>
                        <p>
                          Data Fim: atividade não finalizada
                        </p>
                      </Heading>

                      <Heading
                        size='xs'
                        textTransform='uppercase'
                        width={'50%'}
                        className=' justify-end' >

                        <p>
                          Pacote nº : 1438
                        </p>
                      </Heading>
                    </div>
                    <div className='border my-2 rounded-sm p-1'>
                      <h1 className='text-sm font-bold uppercase'>Descrição da Atividade</h1>
                      <p className='text-sm'>alteração da tela T205 e alteração de qualquer</p>
                    </div>

                    <h1 className='text-sm font-bold uppercase'>alterações</h1>
                    <Divider />
                    <Text fontSize='sm'>
                      - 301 - Relação - Pré - Fechamento -
                    </Text>
                    <Divider />
                    <Text fontSize='sm'>
                      - F301 - ao modificar mes -
                    </Text>
                    <Divider />
                    <Text fontSize='sm'>
                      - F301 - Aprovacao - Modificacao filtros -
                    </Text>
                    <Divider />

                  </Box>
                </Stack>
                <div className='mt-2'>
                  <div className='flex flex-col border p-[0.15rem] rounded-sm w-full '>
                    <Heading className='p-1' size='xs' textTransform='uppercase' width={'100%'}  >
                      Status - atualizado em 11/12/2023 - 09:30
                      {/* <span>07/12/2023</span> */}
                    </Heading>

                    <h1 className='flex text-sm pl-2'> - Está em Desenvolvimento - 08/12/2023 as 12:30</h1>
                    <h1 className='flex text-sm pl-2'> - Está em Homologação - 08/12/2023 as 12:30</h1>
                    <h1 className='flex text-sm pl-2'> - Está em Produção - 08/12/2023 as 14:32</h1>
                    {/* <Heading
                size='xs'
                textTransform='uppercase'
                width={'50%'}
                className='flex justify-end' >
                Pacote nº : <span className=''>1438</span>
              </Heading> */}
                  </div>
                </div>
                <Accordion allowToggle className='my-2  rounded-lg '>
                  <AccordionItem className=''>
                    <h2>
                      <AccordionButton className=' h-6'>
                        <Box as="span" flex='1' textAlign='left' className='text-sm font-bold'>
                          Alteração de Banco
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                </Accordion>
                <div className=' flex gap-10 mt-7'>

                  <button onClick={() => { handleRoutes('/newChangeActivit') }} className="font-bold text-sm  border-teal-600 border-2 rounded-lg w-52 h-8 bg-teal-100 hover:bg-teal-200 transition-all duration-500 flex flex-col items-center shadow-[0_4px_9px_-4px_#0D7E94]" >
                    {isLoading
                      ? <PulseLoader
                        className="  w-full  flex justify-center"
                        color="#0D7E94"
                        size={10}
                        loading={isLoading}

                      />
                      :
                      <span className=" mt-1 transition duration-300 hover:scale-110  w-full">
                        Nova Alteração
                      </span>
                    }
                  </button>
                  <button onClick={() => { handleRoutes('/changeStatusActivit') }} className="font-bold text-sm  border-teal-600 border-2 rounded-lg  w-52 h-8 bg-teal-100 hover:bg-teal-200 transition-all duration-500 flex flex-col items-center shadow-[0_4px_9px_-4px_#0D7E94]" >
                    {isLoading
                      ? <PulseLoader
                        className="  w-full  flex justify-center"
                        color="#0D7E94"
                        size={10}
                        loading={isLoading}

                      />
                      :
                      <span className="mt-1 transition duration-300 hover:scale-110  w-full">
                        Alterar Status
                      </span>
                    }
                  </button>
                  <button onClick={() => { handleRoutes('/endActivit') }} className="font-bold text-sm  border-teal-600 border-2 rounded-lg  w-52 h-8 bg-teal-100 hover:bg-teal-200 transition-all duration-500 flex flex-col items-center shadow-[0_4px_9px_-4px_#0D7E94]" >
                    {isLoading
                      ? <PulseLoader
                        className="  w-full  flex justify-center"
                        color="#0D7E94"
                        size={10}
                        loading={isLoading}

                      />
                      :
                      <span className="mt-1 transition duration-300 hover:scale-110  w-full">
                        Finalizar
                      </span>
                    }
                  </button>
                </div>
              </CardBody>

            )
          }
          )}



        </Card >
      </div>

      <div className=' bg-white m-1 rounded-lg  p-1'>
        <Card className='boder-2'>

          <CardHeader>
            <Heading size='md'>Atividades Recentes</Heading>
          </CardHeader>

          {data.map((item, index) => {

            return (

              <CardBody key={index} className='border-2 rounded-lg m-2'>
                <Stack spacing='2'>
                  <p>
                    Atividade nº : 0004
                  </p>
                  <Box >
                    <div className='flex justify-between border p-[0.15rem] rounded-sm'>
                      <Heading size='xs' textTransform='uppercase' width={'100%'} >
                        <p>
                          Data início: 07/12/2023
                        </p>
                        <p>
                          Data Fim: 08/12/2023
                        </p>
                      </Heading>
                      <Heading
                        size='xs'
                        textTransform='uppercase'
                        width={'50%'}
                        className='flex justify-end' >
                        Pacote nº : 1438
                      </Heading>
                    </div>
                    <Divider className='mt-2' />

                    <Text fontSize='sm'>
                      - 301 - Relação - Pré - Fechamento -
                    </Text>
                    <Divider />
                    <Text fontSize='sm'>
                      - F301 - ao modificar mes -
                    </Text>
                    <Divider />
                    <Text fontSize='sm'>
                      - F301 - Aprovacao - Modificacao filtros -
                    </Text>
                    <Divider />

                  </Box>
                </Stack>
                <div className='mt-2'>
                  <div className='flex flex-col border p-[0.15rem] rounded-sm w-full'>
                    <Heading className='p-1' size='xs' textTransform='uppercase' width={'100%'} >
                      Status
                      {/* <span>07/12/2023</span> */}
                    </Heading>
                    <h1 className='flex text-sm pl-2'> - Está em Homologação - 08/12/2023 as 12:30</h1>
                    <h1 className='flex text-sm pl-2'> - Está em Produção - 08/12/2023 as 14:32</h1>
                    {/* <Heading
      size='xs'
      textTransform='uppercase'
      width={'50%'}
      className='flex justify-end' >
      Pacote nº : <span className=''>1438</span>
    </Heading> */}
                  </div>
                </div>
                <Accordion allowToggle className='my-2  rounded-lg '>
                  <AccordionItem className=''>
                    <h2>
                      <AccordionButton className=' h-6'>
                        <Box as="span" flex='1' textAlign='left' className='text-sm font-bold'>
                          Alteração de Banco
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>

                </Accordion>

              </CardBody>
            )
          })

          }
        </Card>

      </div>

    </>
  )
}