import React from 'react'
import {Play, File} from 'lucide-react'

function CurriculumSectionLessons() {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <Play color='text-dark' fill='text-dark' size={14}/>
          <span className='text-gray-600 text-sm'>What's Webflow?</span>
        </div>
        <span className='text-gray-600 text-[13px]'>07:31</span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <Play color='text-dark' fill='text-dark' size={14}/>
          <span className='text-gray-600 text-sm'>Sign up in Webflow</span>
        </div>
        <span className='text-gray-600 text-[13px]'>07:31</span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <File className='text-dark' size={14}/>
          <span className='text-gray-600 text-sm'>Webflow Terms & Conditions</span>
        </div>
        <span className='text-gray-600 text-[13px]'>5.3 MB</span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <Play color='text-dark' fill='text-dark' size={14}/>
          <span className='text-gray-600 text-sm'>Teaser of Webflow</span>
        </div>
        <span className='text-gray-600 text-[13px]'>07:31</span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <File className='text-dark' size={14}/>
          <span className='text-gray-600 text-sm'>Practice Project</span>
        </div>
        <span className='text-gray-600 text-[13px]'>5.3 MB</span>
      </div>
  </div>
  )
}

export default CurriculumSectionLessons