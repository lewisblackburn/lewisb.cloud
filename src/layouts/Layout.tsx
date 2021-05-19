import React from 'react'

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="min-h-screen text-black bg-white dark:text-white dark:bg-black transition">
      <div className="max-w-7xl p-5 lg:p-24 mx-auto">{children}</div>
    </div>
  )
}
export default Layout
