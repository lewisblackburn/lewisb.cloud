import React, {ReactNode} from 'react'
import {IconType} from 'react-icons/lib'
import {
  SiBabel,
  SiCss3,
  SiDiscord,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiMarkdown,
  SiNextDotJs,
  SiNodeDotJs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiServerless,
  SiSlack,
  SiSpotify,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiWebpack,
  SiYarn,
} from 'react-icons/si'
import {Tooltip} from 'react-tippy'

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="h-screen text-black bg-white dark:text-white dark:bg-black transition">
      <div className="max-w-7xl pt-24 mx-auto">
        {children}
        <footer className="">
          <Icons>
            <Icon icon={SiTypescript} title="TypeScript" />
            <Icon icon={SiReact} title="React.js" />
            <Icon icon={SiRedis} title="Redis" />
            <Icon icon={SiNodeDotJs} title="Node.js" />
            <Icon icon={SiNextDotJs} title="Next.js" />
            <Icon icon={SiPostgresql} title="PostgreSQL" />
            <Icon icon={SiDocker} title="Docker" />
            <Icon icon={SiWebpack} title="Webpack" />
            <Icon icon={SiBabel} title="Babel" />
            <Icon icon={SiYarn} title="Yarn" />
            <Icon icon={SiCss3} title="CSS3" />
            <Icon icon={SiHtml5} title="HTML5" />
            <Icon icon={SiSpotify} title="Spotify" />
            <Icon icon={SiTailwindcss} title="TailwindCSS" />
            <Icon icon={SiServerless} title="Serverless" />
            <Icon icon={SiGit} title="Git" />
            <Icon icon={SiGithub} title="GitHub" />
            <Icon icon={SiSlack} title="Slack" />
            <Icon icon={SiDiscord} title="Discord" />
            <Icon icon={SiMarkdown} title="Markdown" />
            <Icon icon={SiVisualstudiocode} title="VSCode" />
          </Icons>
        </footer>
      </div>
    </div>
  )
}
function Icons({children}: {children: ReactNode}) {
  return <div className="flex space-x-5 text-gray-500">{children}</div>
}

function Icon({icon, title}: {icon: IconType; title: string}) {
  return (
    <Tooltip html={<div className="text-black dark:text-white">{title}</div>}>
      {icon({className: 'inline'})}
    </Tooltip>
  )
}

export default Layout
