import { Input } from '@chakra-ui/react'
import { Twirl as Hamburger } from 'hamburger-react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, toggleChangeState, toggleSidebar, useDebounce } from 'utils'

const Navbar = () => {
  const sidebarState = useSelector((state: RootState) => state.sidebar)
  const dispatch = useDispatch()
  const debounce = useDebounce()

  return (
    <nav className="bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8  prose-h1:text-white gap-4 prose-p:text-white max-w-[68rem] mx-auto">
        <div className="prose-h1:my-0 w-full prose-p:my-0">
          <h1 className="text-5xl">Movie Database</h1>
          <p>Nothing Works Better Than A Movie.</p>
        </div>

        <div className="flex flex-col  items-end w-1/2">
          <Hamburger
            color="white"
            toggled={sidebarState}
            toggle={() => dispatch(toggleSidebar())}
          />
          <Input
            onChange={(e) =>
              debounce(() => dispatch(toggleChangeState(e.target.value)))
            }
            width="full"
            bg="white"
            size="md"
            placeholder="Search your movie..."
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
