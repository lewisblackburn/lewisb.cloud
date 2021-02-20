import {Field} from 'formik'
import React from 'react'

interface FormFieldProps {
  name: string
  type: string
  className?: string
}

export const FormField: React.FC<FormFieldProps> = ({
  name,
  type,
  className,
}) => {
  return (
    <div className="relative mb-4">
      <label htmlFor={name} className="text-sm text-gray-600 leading-7">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <Field
        id={name}
        type={type}
        name={name}
        className={`w-full px-3 py-1 text-base text-gray-700 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 leading-8 transition-colors duration-200 ease-in-out ${className}`}
        autoComplete="off"
      />
    </div>
  )
}

export default FormField
