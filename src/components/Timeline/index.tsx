import React from 'react'
import Stage from './components/TimelineStage'
import Step from './components/TimelineStep'

interface TimelineProps {}

export const Timeline: React.FC<TimelineProps> = ({}) => {
  return (
    <div>
      <Stage title="Timeline">
        <Step title="Outwood Hemsworth Academy" year="2015-2020">
          <span>AQA L1/2 GCSE (9-1) in Biology: B</span>
          <span>AQA L1/2 GCSE (9-1) in Chemistry: B</span>
          <span>OCR L1/2 GCSE (9-1) in Computer Science: A*</span>
          <span>WJEC Eduqas L1/2 GCSE (9-1) in English Language: A</span>
          <span>WJEC Eduqas L1/2 GCSE (9-1) in English Literature: A*</span>
          <span>Pearson Edexcel L1/2 GCSE (9-1) in Mathematics: B</span>
          <span>AQA L1/2 GCSE (9-1) in Physics: B</span>
          <span>OCR Level 1/2 Cam Nat Certificate in Creative iMedia: D2</span>
          <span>Pearson BTEC L1/2 Tech Award in Enterprise: D2</span>
        </Step>
        <Step title="Wakefield College" year="2020-2022" last>
          <span>20-AQA GCE A Level Psychology A L3: N/A</span>
          <span>20-AQA GCE A Level Computer Science L3: N/A</span>
          <span>20-Pearson Edexcel GCE A Level Mathematics L3: N/A</span>
        </Step>
      </Stage>
    </div>
  )
}

export default Timeline
