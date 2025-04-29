import React from 'react'
import FilterContainer from '../FilterContainer/FilterContainer'
import FilterTopic from '../FilterTopic/FilterTopic'


function FilterSection({
  showFilters, setShowFilters,
  grades, subjects,selectedGrade, setSelectedGrade,
  selectedSubject, setSelectedSubject,
}) {
  const handleGradeClick = (gradeId) => {
    setSelectedGrade(prev => prev === gradeId ? null : gradeId);
  };
  const handleSubjectClick = (subjectId) => {
    setSelectedSubject(prev => prev === subjectId ? null : subjectId);
  };
  // const handlePriceClick = (priceId) => {
  //   setSelectedPrice(prev => prev === priceId ? null : priceId);
  // };

  return (
    <div className='flex flex-col gap-4'> 
      <FilterContainer 
        title="GRADES"
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      >
        <div className='flex flex-col gap-1 mt-1 mx-2 mb-2'>
          {grades.map(grade => (
            <FilterTopic
              key={grade.id}
              topic={grade}
              isSelected={selectedGrade === grade.id}
              groupName="grade"
              onToggle={handleGradeClick}
            />
          ))}
        </div>
      </FilterContainer>

      <FilterContainer 
        title="Subjects"
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      >
        <div className='flex flex-col gap-1 mt-1 mx-2 mb-2'>
          {subjects.map(subject => (
            <FilterTopic
              key={subject.id}
              topic={subject}
              isSelected={selectedSubject === subject.id}
              groupName="subject"
              onToggle={handleSubjectClick}
            />
          ))}
        </div>
      </FilterContainer>
      
      {/* <FilterContainer 
        title="PRICE"
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      >
        <div className='flex flex-col gap-1 mx-2'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center p-2 w-1/2 h-10 border border-gray-200 gap-1'>
              <span className='text-dark font-semibold'>$</span>
              <input
                type="number"
                min={0}
                className='w-full h-full outline-none border-none text-sm'
                placeholder='min'
              />
            </div>
            <div className='flex items-center p-2 w-1/2 h-10 border border-gray-200 gap-1'>
              <span className='text-dark font-semibold'>$</span>
              <input
                type="number"
                min={0}
                className='w-full h-full outline-none border-none text-sm'
                placeholder='max'
              />
            </div>
          </div>
          {prices.map(price => (
            <FilterTopic
              key={price.id}
              topic={price}
              isSelected={selectedPrice === (price.id)}
              onToggle={handlePriceClick}
              groupName="price"
            />
          ))}
        </div>
      </FilterContainer> */}
    </div>
  )
}

export default FilterSection