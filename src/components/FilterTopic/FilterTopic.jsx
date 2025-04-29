import React from 'react'

function FilterTopic({ topic, isSelected, onToggle, groupName }) {
  return (
    <label 
      className='flex items-center justify-between py-2 cursor-pointer'
      onClick={(e) => e.stopPropagation()}
    >
      <div className='flex items-center gap-2'>
        <div className="relative w-5 h-5">
          <input
            type="radio"
            name={groupName}
            checked={isSelected}
            onChange={() => onToggle(topic.id)}
            className="peer absolute w-full h-full opacity-0 cursor-pointer"
          />
          <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
            <div className={`w-3 h-3 rounded-full bg-primary transition-transform duration-200 
              ${isSelected ? 'scale-100' : 'scale-0'}`} />
          </div>
        </div>
        <span className={`text-md transition-colors duration-200
          ${isSelected ? 'text-primary font-semibold' : 'text-gray-600'}`}
        >
          {topic.name}
        </span>
      </div>
    </label>
  )
}

export default FilterTopic