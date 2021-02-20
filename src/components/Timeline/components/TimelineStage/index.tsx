import React from 'react'

interface TimelineStageProps {
  title: string
}

export const TimelineStage: React.FC<TimelineStageProps> = ({
  title,
  children,
}) => {
  return (
    <div>
      <h1 className={'font-bold text-2xl'}>{title}</h1>
      <ul className={'py-5'}>{children}</ul>
    </div>
  )
}

export default TimelineStage
