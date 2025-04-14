import React from 'react'
import { ArrowRight } from 'lucide-react'

const Pages = [
  { id: 1, label: '01', active: false },
  { id: 2, label: '02', active: true },
  { id: 3, label: '03', active: false },
  { id: 4, label: '04', active: false },
  { id: 5, label: '05', active: false },
]

function Pagination() {
  return (
    <>
        <div className='flex items-center text-light justify-between my-8 rounded-full hover:bg-secondary hover:text-dark cursor-pointer'>
            <ArrowRight className='m-3' size={25} />
        </div>
        <div className='flex items-center gap-2 mx-5'>
            {Pages.map((page) => (
            <div 
                key={page.id}
                className={`w-11 h-11 flex items-center justify-center rounded-full cursor-pointer
                ${page.active 
                    ? 'bg-[#3A4359] text-white' 
                    : 'text-dark hover:bg-secondary'}`}
            >
                {page.label}
            </div>
            ))}
        </div>
        <div className='flex items-center text-light justify-between my-8 rounded-full hover:bg-secondary hover:text-dark cursor-pointer'>
            <ArrowRight className='m-3' size={25} />
        </div>
    </>
  )
}

export default Pagination