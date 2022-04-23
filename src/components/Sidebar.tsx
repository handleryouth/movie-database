import {
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, toggleSidebar } from 'utils'

const Sidebar = () => {
  const sidebarState = useSelector((state: RootState) => state.sidebar)
  const dispatch = useDispatch()
  return (
    <Drawer
      placement="left"
      onClose={() => dispatch(toggleSidebar())}
      isOpen={sidebarState}
    >
      <DrawerOverlay />
      <DrawerContent>
        <Container>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Where to go?</DrawerHeader>
        </Container>

        <DrawerBody>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar
