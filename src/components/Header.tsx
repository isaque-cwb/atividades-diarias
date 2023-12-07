import { Box, Image, Wrap, WrapItem } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import Cookie from 'js-cookie'
import { useAuthContext } from '@/context/authContext'

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
      <div className='flex flex-col items-center border-2 rounded-xl p-2'>
        <Avatar name='Dan Abrahmov' src='avatar.png' />
        <h1 className='text-sm'>Olá, <strong>Nome...</strong></h1>
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
      </div>

    </div>
  )
}