import React from 'react'

interface TimelineStepProps {
  title: string
  year: string
  last?: boolean
}

export const TimelineStep: React.FC<TimelineStepProps> = ({
  title,
  year,
  last,
  children,
}) => {
  return (
    <li className="flex">
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full shadow-2xl border-2 ${
            last ? 'border-blue-500' : 'border-gray-200'
          }`}
        />
        {!last && (
          <div className="w-0 h-full border border-gray-300 shadow-2xl" />
        )}
      </div>
      <div className="mb-4 ml-4 -mt-1">
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
        <p className="flex flex-col mt-2 text-gray-500 dark:text-gray-400 space-y-2">
          {children}
        </p>
        <p className="py-2 text-sm text-gray-300 dark:text-gray-600">{year}</p>
      </div>
    </li>
  )
}

export default TimelineStep
