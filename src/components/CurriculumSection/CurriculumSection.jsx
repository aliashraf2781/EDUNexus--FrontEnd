import React, { useState } from 'react'
import { ChevronDown, CirclePlay, Clock3 } from 'lucide-react'

function CurriculumSection({ 
  title,
  lectures,
  duration,
  children,
  open
}) {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <>
      <div className='w-full'>
        <div className='h-full w-auto bg-white shadow-lg lg:shadow-none'>
          <div className='border-[1.3px] border-gray-200 flex flex-col h-full'>
            <div 
              className='flex items-center justify-between p-4 cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className='flex items-center gap-2'>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-200 text-light ${
                    isOpen ? 'rotate-180 text-primary' : ''
                  }`}
                />
                <h3 className={`text-[17px] text-dark
                  ${isOpen ? 'text-primary font-semibold' : ''}`}>
                    {title}
                </h3>
              </div>
              <div className='flex items-center gap-2'>
                <div className='flex justify-center gap-1 items-center'>
                  <CirclePlay className='w-4 h-4 text-[#564FFD]' size={14}/>
                  <span className='text-gray-600 text-[14px]'>{lectures} lectures</span>
                </div>
                <div className='flex justify-center gap-1 items-center'>
                  <Clock3 className='w-4 h-4 text-[#FD8E1F]' size={14}/>
                  <span className='text-gray-600 text-[14px]'>{duration}</span>
                </div>
              </div>
            </div>
            {isOpen && (
              <div className='flex-1 overflow-y-auto'>
                <div className='flex flex-col gap-2 mx-3 mb-4 px-2'>
                  {children}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CurriculumSection