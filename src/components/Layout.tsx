import Sidebar from './Sidebar'

import { Navbar } from 'components'
import { LayoutProps } from 'types'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="prose !min-w-[320px] prose-ul:list-none !max-w-none">
      <Sidebar />
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
