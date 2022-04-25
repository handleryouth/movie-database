import Sidebar from './Sidebar'

import { Navbar } from 'components'
import { LayoutProps } from 'types'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="prose prose-neutral !min-w-[320px] prose-ul:list-none !max-w-none ">
      <Sidebar />
      <Navbar />
      <div className="min-h-screen relative">{children}</div>
    </div>
  )
}

export default Layout
