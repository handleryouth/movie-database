import {
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, toggleSidebar } from 'utils'

const Sidebar = () => {
  const PAGE_LINKS = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/series',
      label: 'Series',
    },
  ]

  const sidebarState = useSelector((state: RootState) => state.sidebar)
  const dispatch = useDispatch()
  return (
    <Drawer
      placement="left"
      onClose={() => dispatch(toggleSidebar())}
      isOpen={sidebarState}
    >
      <DrawerOverlay />
      <DrawerContent className="prose prose-a:no-underline">
        <Container>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Where to go?</DrawerHeader>
        </Container>

        <DrawerBody>
          <Flex flexDirection="column" fontSize="large" alignItems="flex-start">
            {PAGE_LINKS.map((link, index) => (
              <Link key={index} href={link.href} passHref>
                <a
                  onClick={() => dispatch(toggleSidebar())}
                  className="hover:text-blue-500 transition-colors"
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar
