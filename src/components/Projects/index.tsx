import React from 'react'
import Section from '../Section'
import ProjectItem from './components/ProjectItem'

interface ProjectsProps {}
interface ProjectProps {
  href: string
  title: string
  description: string
}

const projects = [
  {
    href: 'https://github.com/lewisblackburn/lewisb.cloud',
    title: 'Personal Website',
    description:
      "This is the source-code of the site you're on right now. It has had many variations over the years and probably will have a lot more.",
  },
  {
    href: 'https://github.com/lewisblackburn/dotfiles',
    title: 'dotfiles',
    description:
      'These are my dotfiles, note that these are for MacOS and so the install script is tailored around that. However, they will work on other machines.',
  },
  {
    href: 'https://github.com/lewisblackburn/twtr',
    title: 'twtr',
    description:
      "This was the second course I took and chose to make a twitter clone, the code is a result of Ben Awad's FullStack React GraphQL TypeScript video.",
  },
  {
    href: 'https://github.com/lewisblackburn/templates',
    title: 'templates',
    description:
      "I use this repo to quickly start a project, however, I'm going to be changing this from a monorepo into a node CLI for convenience.",
  },
  {
    href: 'https://github.com/lewisblackburn/ilistened-to',
    title: 'ilistened-to',
    description:
      'This is a simple web-app to show you your last 49/50 songs played on Spotify using the Spotify API.',
  },
  {
    href: 'https://github.com/lewisblackburn/ilistened-to',
    title: 'mern-stack-course',
    description:
      "The first course I took was a random Udemy course on the MERN stack, I quickly found that I didn't like using REST at all and transferred to GraphQL",
  },
]

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <Section id="projects">
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project: ProjectProps, index: number) => (
          <div className="transform-gpu hover:scale-105 transition">
            <ProjectItem href={project.href} title={project.title}>
              {project.description}
            </ProjectItem>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Projects
