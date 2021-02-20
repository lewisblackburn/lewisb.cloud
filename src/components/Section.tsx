import React from 'react'

interface SectionProps {
  id?: string
}

export const Section: React.FC<SectionProps> = ({id, children}) => {
  return (
    <section id={id} className="pb-24">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">{children}</div>
    </section>
  )
}

export default Section
