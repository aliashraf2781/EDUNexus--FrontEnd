import React, { useState } from 'react'
import { ChevronDown, CirclePlay, Clock3, CheckCheck } from 'lucide-react'

function CourseContentContainer({ 
  title,
  lectures,
  duration,
  children,
  open,
  isFinished
}) {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <>
      <div className='w-full'>
        <div className='h-full w-auto bg-white'>
          <div className='border-[1.3px] border-gray-200 flex flex-col h-full'>
            <div 
              className={`flex items-center justify-between px-3 py-4 cursor-pointer
                ${isOpen ? 'bg-gray-200' : ''}` 
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className='flex items-center gap-1'>
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
                  <span className='text-gray-600 text-[13px]'>{lectures} lectures</span>
                </div>
                <div className='flex justify-center gap-1 items-center'>
                  <Clock3 className='w-4 h-4 text-[#FD8E1F]' size={14}/>
                  <span className='text-gray-600 text-[13px]'>{duration}</span>
                </div>
                <div className={`justify-center gap-1 items-center
                    ${isFinished ? 'flex':'hidden'}`}>
                  <CheckCheck className='w-4 h-4 text-[#23BD33]' size={14}/>
                  <span className='text-gray-600 text-[13px]'>25% Finished <span className='text-light'>(1/4)</span></span>
                </div>
              </div>
            </div>
            {isOpen && (
              <div className='flex-1 overflow-y-auto'>
                <div className='flex flex-col gap-2'>
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

export default CourseContentContainer