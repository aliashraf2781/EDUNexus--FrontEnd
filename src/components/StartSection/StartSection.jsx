import React from 'react'
import { SlidersVertical, Search } from 'lucide-react'

const suggestions = ['user interface', 'user experience', 'web design', 'interface', 'app'];

function StartSection({ showFilters, setShowFilters }) {
  return (
    <div className='flex flex-col gap-3 border-b border-gray-200 my-5'>
      <div className='flex flex-col sm:flex-row lg:justify-between gap-4 md:gap-2'>
        <div className='flex items-start sm:items-center gap-3'>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`group h-10 px-4 border-[1.5px] flex items-center gap-2
              !rounded-none !bg-white w-fit !sm:w-auto cursor-pointer
              ${showFilters 
                ? '!border-primary text-primary' 
                : '!border-secondary text-dark'
              }
              hover:border-primary hover:text-primary
              focus:!outline-none`}
          >
            <SlidersVertical size={17} />
            <span className='text-[15px] font-semibold hidden md:block'>Filter</span>
            <span className={`text-xs font-semibold px-2 py-1 hidden md:block
              ${showFilters 
                ? 'bg-primary text-white' 
                : 'bg-secondary text-[#3258B4]'
              }
              group-hover:bg-primary group-hover:text-white`}
            >
              3
            </span>
          </button>
          
          <div className='flex items-center gap-3 text-dark border-[1.5px] border-gray-100 
            rounded-none px-3 py-2 h-10 w-full sm:w-auto'>
            <Search size={19} />
            <input 
              type="text" 
              placeholder='Search' 
              className='focus:!outline-none w-full lg:w-sm'
            />
          </div>
        </div>

        <div className='flex items-center gap-3 text-dark'>
          <span className='text-[13px] whitespace-nowrap'>Sort by: </span>
          <div className='border-[1.5px] border-gray-100 px-3 h-10 flex items-center cursor-pointer w-fit'>
            <select className='text-[15px] rounded-none focus:!outline-none w-fit'>
              <option value="relevance">Trending</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row justify-between gap-3 py-3'>
        <div className='flex flex-wrap items-center gap-2'>
          <h2 className='text-[13px] text-dark'>Suggestion:</h2>
          {suggestions.map((suggestion, index) => (
            <div key={index} className='text-[13px] text-primary whitespace-nowrap'>
              {suggestion}
            </div>
          ))}
        </div>
        <div className='flex items-center gap-2 whitespace-nowrap'>
          <h2 className='text-[13px] text-dark font-semibold'>3,145,684</h2>
          <p className='text-[13px] text-light'>results find for "ui/ux design"</p>
        </div>
      </div>
    </div>
  )
}

export default StartSection