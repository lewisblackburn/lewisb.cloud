import Footer from 'components/Footer'
import Header from 'components/Header'
import React, {Fragment} from 'react'

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Fragment>
      <div className="text-black bg-white dark:text-white dark:bg-black transition">
        <Header />
        {children}
        <Footer />
      </div>
    </Fragment>
  )
}

export default Layout
