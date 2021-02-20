import React from 'react'

export interface ButtonProps {
  textColor?: string
  bgColor?: string
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

const hover = (colour: string) => {
  const part = colour.split('-')

  if (part[2] && part[2] !== '900')
    return `${part[0]}-${part[1]}-${parseInt(part[2]) + 100}`
  else return `${part[0]}-${part[1]}`
}

export const Button: React.FC<ButtonProps> = ({
  bgColor = 'bg-gray-100',
  textColor = 'text-gray-500',
  type,
  children,
  className,
}) => {
  return (
    <button
      className={`flex items-center w-full px-6 py-3 text-lg  border-0 rounded focus:outline-none ${textColor} ${bgColor} hover:${hover(
        bgColor,
      )} hover:${hover(textColor)} rounded-md ${className}`}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
