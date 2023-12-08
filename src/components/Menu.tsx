import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'


export default function MenuCustom() {
  return (
    <div className=' bg-white m-1 rounded-lg border-2 p-1'>
      <Menu variant={'outline'} >
        <MenuButton as={Button}
          className='bg-white mr-1 '
          background={'#fff'}
          borderWidth={2}
          rightIcon={<ChevronDownIcon />}>
          Atividades
        </MenuButton>
        <MenuList>
          <MenuItem>Nova Atividade</MenuItem>
        </MenuList>

      </Menu>

    </div>
  )
}