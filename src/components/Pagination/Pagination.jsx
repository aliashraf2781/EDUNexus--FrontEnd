import React from 'react'
import { ArrowRight } from 'lucide-react'

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className='flex items-center text-light justify-between my-8 rounded-full hover:bg-secondary hover:text-dark cursor-pointer' onClick={() => paginate(currentPage - 1)}>
          <ArrowRight className='m-3' size={25} />
      </div>
      <div className='flex items-center gap-2 md:mx-5'>
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`w-11 h-11 flex items-center justify-center rounded-full cursor-pointer
              ${currentPage === pageNumber
                ? 'bg-[#3A4359] text-white'
                : 'text-dark hover:bg-secondary'}`}
          >
            {pageNumber}
          </div>
        ))}
      </div>
      <div className='flex items-center text-light justify-between my-8 rounded-full hover:bg-secondary hover:text-dark cursor-pointer' onClick={() => paginate(currentPage + 1)}>
          <ArrowRight className='m-3' size={25} />
      </div>
    </>
  )
}

export default Pagination