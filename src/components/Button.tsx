import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button
      className="flex items-center justify-center rounded-md p-3 focus:outline-none text-2xl bg-bg text-fg hover:bg-lighter-gray transition"
      {...props}
    >
      {children}
    </button>
  )
}
