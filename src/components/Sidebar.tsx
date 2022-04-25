import {
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorMode,
} from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
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
    {
      href: '/watchlist',
      label: 'Watchlist',
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
      <DrawerContent
        className="prose prose-a:no-underline "
        backgroundColor="black"
      >
        <Container borderBottomWidth="1px">
          <DrawerHeader flexGrow="1" color="white" fontSize="1.8rem">
            Where to go?
          </DrawerHeader>
          <DrawerCloseButton size="lg" color="white" />
        </Container>

        <DrawerBody>
          <Flex
            flexDirection="column"
            fontSize="large"
            alignItems="flex-start"
            rowGap="1rem"
          >
            {PAGE_LINKS.map((link, index) => (
              <Link key={index} href={link.href} passHref>
                <a
                  onClick={() => dispatch(toggleSidebar())}
                  className="hover:text-blue-500 transition-colors text-2xl text-white"
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
