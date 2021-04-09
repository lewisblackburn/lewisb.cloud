import {Activity} from 'components/Activity'
import {Header} from 'components/Header'
import React, {Fragment} from 'react'

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Fragment>
      <div className="transition">
        <div className="max-w-6xl mx-auto py-12">
          <Header />
        </div>
        {children}
        <div className="bg-white">
          <div className="grid place-items-center max-w-6xl mx-auto px-6 py-12">
            <Activity />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Layout
