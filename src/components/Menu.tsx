import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { IoTodayOutline } from "react-icons/io5";


export default function MenuCustom() {
  const route = useRouter()

  function handleRoutes() {
    route.push('/newActivit')
  }
  return (
    <div className=' bg-white m-1 rounded-lg border-2 p-1'>
      <Menu variant={'outline'}  >
        <MenuButton as={Button}
          className='bg-white mr-1 '
          background={'#fff'}
          rightIcon={<ChevronDownIcon />}
        >

          Atividades
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleRoutes}>
            <Icon as={IoTodayOutline} w={'initial'} color={'teal'} h={6} pr={2} />
            Nova Atividade
          </MenuItem>
        </MenuList>

      </Menu>

    </div>
  )
}