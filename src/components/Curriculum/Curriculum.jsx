import React from 'react'
import {FolderOpen, CirclePlay, Clock3} from 'lucide-react'
import CurriculumSection from '../CurriculumSection/CurriculumSection'
import CurriculumSectionLessons from '../CurriculumSectionLessons/CurriculumSectionLessons'

function Curriculum() {
  return (
    <div className='w-full flex flex-col items-start pl-1 pr-2 gap-3 my-15'>
        <div className='flex md:flex-row flex-col w-full justify-between items-center my-3'>
            <span className='text-dark font-semibold text-2xl'>Curriculum</span>
            <div className='flex gap-3 items-center'>
                <div className='flex justify-center gap-1 items-center'>
                    <FolderOpen className='w-4 h-4 text-primary' size={14}/>
                    <span className='text-gray-600 text-[14px]'>6 Sections</span>
                </div>
                <div className='flex justify-center gap-1 items-center'>
                    <CirclePlay className='w-4 h-4 text-[#564FFD]' size={14}/>
                    <span className='text-gray-600 text-[14px]'>202 Lectures</span>
                </div>
                <div className='flex justify-center gap-1 items-center'>
                    <Clock3 className='w-4 h-4 text-[#FD8E1F]' size={14}/>
                    <span className='text-gray-600 text-[14px]'>19h 37m</span>
                </div>
            </div>
        </div>
        <div className='w-full my-2'>
            <CurriculumSection title='Getting Started' open={true} lectures={4} duration='51m'>
                <CurriculumSectionLessons />    
            </CurriculumSection>
            <CurriculumSection title='Secret of Good Design' open={false} lectures={52} duration='5h 49m'>
                <CurriculumSectionLessons />
            </CurriculumSection>
            <CurriculumSection title='Practice Design Like An Artist' open={false} lectures={43} duration='53m'>
                <CurriculumSectionLessons />
            </CurriculumSection>
            <CurriculumSection title='Web Development (webflow)' open={false} lectures={137} duration='10h 6m'>
                <CurriculumSectionLessons />
            </CurriculumSection>
            <CurriculumSection title='Secret of Making Money Freelancing' open={false} lectures={21} duration='38m'>
                <CurriculumSectionLessons />
            </CurriculumSection>
            <CurriculumSection title='Advanced' open={false} lectures={39} duration='1h 31m'>
                <CurriculumSectionLessons />
            </CurriculumSection>
        </div>
    </div>
  )
}

export default Curriculum