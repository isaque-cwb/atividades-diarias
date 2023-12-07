import { Box, Image, Wrap, WrapItem } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export default function Header() {
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
        <h1>Olá, <strong>Nome...</strong></h1>
      </div>

    </div>
  )
}