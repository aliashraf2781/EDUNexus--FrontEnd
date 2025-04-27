import React, { useState }  from 'react'
import { ChevronDown, X } from 'lucide-react'

function FilterContainer({ 
  title, 
  showFilters, 
  setShowFilters,
  children 
}) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <div className={`static inset-y-0 left-0 transform lg:relative lg:translate-x-0 
        transition duration-200 ease-in-out z-30
        ${showFilters ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='h-full w-72 lg:w-auto bg-white shadow-lg lg:shadow-none'>
          <div className='border-[1.3px] border-gray-200 flex flex-col h-full'>
            <div 
              className='flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}
            >
              <h3 className='text-lg font-semibold text-dark'>{title}</h3>
              <div className='flex items-center gap-2'>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>

            {isOpen && (
              <div className='flex-1 overflow-y-auto'>
                <div className='flex flex-col gap-2 py-4 px-2'>
                  {children}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-opacity-50 lg:hidden
          ${showFilters ? 'block' : 'hidden'}`}
        onClick={() => setShowFilters(false)}
      />
    </>
  )
}

export default FilterContainer