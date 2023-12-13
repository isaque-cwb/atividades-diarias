import { Box, Button, Icon, Image, Menu, MenuButton, MenuItem, MenuList, Wrap, WrapItem } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import Cookie from 'js-cookie'
import { useAuthContext } from '@/context/authContext'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { IoExitOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";

export default function Header() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { userAuth, handleStateUserChange, handleClearChange } = useAuthContext()


  async function handleLogout() {
    handleClearChange()
    window.sessionStorage.removeItem('auth_token')
    Cookie.remove('auth_token')
    router.push('/')
  }

  return (
    <div className="border-2 flex relative h-auto w-full p-2 justify-between items-center">
      <Box boxSize='fit-conten' >
        <Image boxSize='90px'
          objectFit='cover'
          src='planejamento.png'
          alt='imagem de atividades diárias' w={130} />
      </Box>
      <div>
        <h1 className='font-sans font-semibold text-2xl  text-gray-600'>Atividades Diárias</h1>
      </div>

      <Menu  >
        <MenuButton
          as={Button}
          h={'auto'}
          w={'auto'}
          p={2}
          bg={'#FFF'}
          className='flex  items-center border-2 rounded-xl p-2 h- max-w-[128px] max-h-[135px]'>

          <Avatar name='avatar vazio' src='avatar.png' />
          <h1 className='text-sm overflow-hidden text-ellipsis '>Olá, <strong  >Usuário</strong></h1>

        </MenuButton>
        <MenuList>
          <MenuItem minH='auto' >
            <Icon as={IoCreateOutline} style={{ width: 45, height: 25, color: 'teal' }} />
            <span>Cadastrar Usuário</span>
          </MenuItem>
          <MenuItem minH='auto' onClick={handleLogout} >
            <Icon as={IoExitOutline} style={{ width: 45, height: 25, color: 'teal' }} />
            <span>Sair</span>
          </MenuItem>
        </MenuList>
      </Menu>
      {/* <div className='flex flex-col items-center border-2 rounded-xl p-2  max-w-[128px] max-h-[135px] '>
        <Avatar name='Dan Abrahmov' src='avatar.png' />
        <h1 className='text-sm '>Olá, <strong >usuário</strong></h1>
        <div >
          <button type="button" onClick={handleLogout} className="relative w-24 font-bold text-lg mt-1 border-teal-600 border-2 rounded-lg h-6 bg-teal-100 hover:bg-teal-200 transition-all duration-500 flex flex-col items-center shadow-[0_4px_9px_-4px_#0D7E94]" >
            {isLoading
              ? <PulseLoader
                className=" w-full  flex justify-center items-center"
                color="#0D7E94"
                size={10}
                loading={isLoading}
              />
              :
              <span className="text-sm transition duration-300 hover:scale-110 ">
                Sair
              </span>
            }
          </button>
        </div>
      </div> */}



    </div>
  )
}