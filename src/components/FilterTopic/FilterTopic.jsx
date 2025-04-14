import React from 'react'

function FilterTopic({ topic, isSelected, onToggle }) {
  return (
    <label 
      className='flex items-center justify-between py-2 cursor-pointer'
      onClick={(e) => e.stopPropagation()}
    >
      <div className='flex items-center gap-2'>
        <div className="relative">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => {
              e.stopPropagation()
              onToggle(topic.id)
            }}
            className="appearance-none w-4 h-4 border border-light 
              checked:bg-primary checked:border-primary
              transition-colors duration-200 cursor-pointer"
            style={{ borderRadius: 0 }}
          />
          {isSelected && (
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
        <span className={`text-sm transition-colors duration-200
          ${isSelected ? 'text-primary font-semibold' : 'text-gray-600'}`}
        >
          {topic.name}
        </span>
      </div>
      <span className={`text-sm text-gray-500
        ${isSelected ? 'text-gray-700 font-semibold' : ''}`}
      >
        ({topic.count})
      </span>
    </label>
  )
}

export default FilterTopic