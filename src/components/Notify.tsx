import React from 'react'

interface NotifyProps {}

export const Notify: React.FC<NotifyProps> = ({}) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white border-gray-200 dark:border-gray-700 border-b-2 py-1.5 text-center">
      <p className="text-sm">
        Please note that this blog is a{' '}
        <a
          href="https://github.com/lewisblackburn/lewisb.cloud"
          className="underline hover:text-blue-500"
        >
          work-in-progress
        </a>
        .
      </p>
    </div>
  )
}

export default Notify
