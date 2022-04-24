import { Twirl as Hamburger } from 'hamburger-react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState, toggleSidebar } from 'utils'

const Navbar = () => {
  const sidebarState = useSelector((state: RootState) => state.sidebar)
  const dispatch = useDispatch()

  return (
    <nav className="bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8  prose-h1:text-white gap-4 prose-p:text-white max-w-[68rem] mx-auto">
        <div className="prose-h1:my-0 w-full prose-p:my-0">
          <h1 className="text-5xl">Movie Database</h1>
          <p>Nothing Works Better Than A Movie.</p>
        </div>

        <Hamburger
          color="white"
          toggled={sidebarState}
          toggle={() => dispatch(toggleSidebar())}
        />
      </div>
    </nav>
  )
}

export default Navbar
