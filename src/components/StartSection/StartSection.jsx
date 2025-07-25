import React from 'react'
import { SlidersVertical, Search } from 'lucide-react'

function StartSection({ showFilters, setShowFilters, results, filters, setSortOrder, setSearchTerm }) {
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
              {filters}
            </span>
          </button>
          
          <div className='flex items-center gap-3 text-dark border-[1.5px] border-gray-100 
            rounded-none px-3 py-2 h-10 w-full sm:w-auto'>
            <Search size={19} />
            <input 
              type="text" 
              placeholder='Search' 
              onChange={(e) => setSearchTerm(e.target.value)}
              className='focus:!outline-none w-full lg:w-sm'
            />
          </div>
        </div>
        
        <div className='flex flex-col justify-between items-end gap-3 py-3'>
          <div className='flex items-center gap-3 text-dark'>
            <span className='text-[13px] whitespace-nowrap'>Sort by: </span>
            <div className='border-[1.5px] border-gray-100 px-3 h-10 flex items-center cursor-pointer w-fit'>
              <select className='text-[15px] rounded-none focus:!outline-none w-fit' onChange={(e) => setSortOrder(e.target.value)}>
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>
          <div className='flex items-center gap-2 whitespace-nowrap'>
            <h2 className='text-[13px] text-dark font-semibold'>{results}</h2>
            <p className='text-[13px] text-light'>results found</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartSection