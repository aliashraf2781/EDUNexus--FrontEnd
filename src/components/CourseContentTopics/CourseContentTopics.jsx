import React, { useState } from 'react'
import {Pause, Play} from 'lucide-react'

function CourseContentTopics({ name, isPlaying, duration, isSelected }) {
    const[Selected, setSelected] = useState(isSelected)
  return (
    <div className={`flex flex-col gap-1 pt-1 px-2 ${isPlaying ? 'bg-secondary' : ''}`}>
        <label 
        className='flex items-center justify-between py-3 cursor-pointer px-3'
        onClick={(e) => e.stopPropagation()}
        >
        <div className='flex items-center gap-2'>
            <div className="relative">
            <input
                type="checkbox"
                checked={Selected}
                onChange={(e) => {
                e.stopPropagation()
                setSelected(!Selected)
                }}
                className="appearance-none w-4 h-4 border border-light 
                checked:bg-primary checked:border-primary
                transition-colors duration-200 cursor-pointer"
                style={{ borderRadius: 0 }}
            />
            {Selected && (
                <svg 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 text-white pointer-events-none" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="square" 
                strokeLinejoin="square"
                >
                <polyline points="20 6 9 17 4 12" />
                </svg>
            )}
            </div>
            <span className='text-md transition-colors duration-200 text-gray-600'>
            {name}
            </span>
        </div>
        <span className={`text-sm text-gray-500 flex items-center gap-2
            ${isPlaying ? 'text-gray-700 font-semibold' : ''}`}
        >
            {isPlaying 
                ? <Pause size={14} className='text-dark' fill='text-dark'/> 
                : <Play size={14} className='text-[#A1A5B3]' fill='#A1A5B3'/> 
            }
            {duration}
        </span>
        </label>
    </div>
  )
}

export default CourseContentTopics