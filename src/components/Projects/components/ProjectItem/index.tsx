import ExternalLink from 'components/ExternalLink'
import React from 'react'
import {SiGithub} from 'react-icons/si'

export interface ProjectItemProps {
  title: string
  href: string
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  href,
  children,
}) => {
  return (
    <ExternalLink href={href}>
      <div className="flex flex-col justify-between h-full lg:h-40 px-8 py-6 mx-auto rounded-lg shadow-lg dark:bg-gray-900 transition">
        <div>
          <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
            {title}
          </span>
          <p className="hidden lg:block">{children}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <SiGithub className="w-6 h-6" />
            <span className="mx-3 text-sm text-gray-700 dark:text-gray-200">
              GitHub
            </span>
          </div>
          <span className="text-sm font-light text-gray-600 truncate dark:text-gray-300">
            {href}
          </span>
        </div>
      </div>
    </ExternalLink>
  )
}

export default ProjectItem
