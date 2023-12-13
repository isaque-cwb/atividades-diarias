import { Box, Button, Icon, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Cookie from 'js-cookie'
import { useAuthContext } from '@/context/authContext'
import { IoExitOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";

export default function Header() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { handleClearChange } = useAuthContext()


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
          <MenuItem minH='auto' onClick={() => { router.push('/newUser') }} >
            <Icon as={IoPersonSharp} style={{ width: 45, height: 25, color: 'teal' }} />
            <span>Perfil</span>
          </MenuItem>
          <MenuItem minH='auto' onClick={() => { router.push('/newUser') }} >
            <Icon as={IoPersonAddOutline} style={{ width: 45, height: 25, color: 'teal' }} />
            <span>Cadastrar Usuário</span>
          </MenuItem>
          <MenuItem minH='auto' onClick={handleLogout} >
            <Icon as={IoExitOutline} style={{ width: 45, height: 25, color: 'teal' }} pl={1} />
            <span>Sair</span>
          </MenuItem>
        </MenuList>
      </Menu>


    </div>
  )
}