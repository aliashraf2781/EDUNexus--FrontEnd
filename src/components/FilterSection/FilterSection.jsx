import React from 'react'
import FilterContainer from '../FilterContainer/FilterContainer'
import FilterTopic from '../FilterTopic/FilterTopic'

function FilterSection({
  showFilters, setShowFilters,
  grades, subjects,selectedGrade, setSelectedGrade,
  selectedSubject, setSelectedSubject,
}) {
  const handleGradeClick = (gradeName) => {
    setSelectedGrade(prev => prev === gradeName ? null : gradeName);
  };
  const handleSubjectClick = (subjectName) => {
    setSelectedSubject(prev => prev === subjectName ? null : subjectName);
  };

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
              isSelected={selectedGrade === grade.name}
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
              isSelected={selectedSubject === subject.name}
              groupName="subject"
              onToggle={handleSubjectClick}
            />
          ))}
        </div>
      </FilterContainer>
    </div>
  )
}

export default FilterSection