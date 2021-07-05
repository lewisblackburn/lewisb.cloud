import {Header} from 'components/Header'
import dynamic from 'next/dynamic'
import React from 'react'

interface LayoutProps {}

const Palette = dynamic(() => import('../components/Palette'), {
  loading: () => <div className=""></div>,
  ssr: false,
})

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="p-5 xl:p-0 xl:py-20 bg-fg dark:bg-bg text-fg min-h-screen transition">
      <Palette />
      <div className=" max-w-3xl mx-auto">
        <Header />
        {children}
      </div>
    </div>
  )
}
export default Layout
