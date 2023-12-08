import { ChevronDownIcon } from '@chakra-ui/icons'
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Stack, StackDivider, Box, Divider, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'


export default function CardCustom() {

  const data = [
    1, 2, 3, 4, 5
  ]
  return (
    <div className=' bg-white m-1 rounded-lg  p-1'>
      <Card className='boder-2'>
        <CardHeader>
          <Heading size='md'>Atividades Recentes</Heading>
        </CardHeader>

        {data.map((item, index) => {

          return (

            <CardBody key={index} className='border-2 rounded-lg m-2'>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box >
                  <div className='flex justify-between border p-[0.15rem] rounded-sm'>
                    <Heading size='xs' textTransform='uppercase' width={'50%'} >
                      Data: <span>07/12/2023</span>
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
                  <Heading className='p-1' size='xs' textTransform='uppercase' width={'50%'} >
                    Status
                    {/* <span>07/12/2023</span> */}
                  </Heading>
                  <h1 className='flex text-sm pl-2'> - Está em Homologação - 08/12/2023</h1>
                  <h1 className='flex text-sm pl-2'> - Está em Produção - 08/12/2023</h1>
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
  )
}