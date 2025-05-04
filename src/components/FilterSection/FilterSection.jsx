import React, { useEffect, useState } from 'react'
import { Cpu, ChevronDown } from 'lucide-react'
import FilterContainer from '../FilterContainer/FilterContainer'
import FilterTopic from '../FilterTopic/FilterTopic'


function FilterSection({ showFilters, setShowFilters }) {
  const [categories, setCategories] = useState([])
  const [courseLevels, setCourseLevels] = useState([])
  const [tools, setTools] = useState([])
  const [prices, setPrices] = useState([])

  const [openTopics, setOpenTopics] = useState({})
  const [selectedTopics, setSelectedTopics] = useState([])
  const [selectedLevels, setSelectedLevels] = useState([])
  const [selectedTools, setSelectedTools] = useState([])
  const [selectedPrice, setSelectedPrice] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const [catRes, levelRes, toolsRes, priceRes] = await Promise.all([
        fetch('http://localhost:3010/categories'),
        fetch('http://localhost:3010/courseLevels'),
        fetch('http://localhost:3010/tools'),
        fetch('http://localhost:3010/prices'),
      ])
      const [catData, levelData, toolsData, priceData] = await Promise.all([
        catRes.json(),
        levelRes.json(),
        toolsRes.json(),
        priceRes.json(),
      ])
      setCategories(catData)
      setCourseLevels(levelData)
      setTools(toolsData)
      setPrices(priceData)
    }
    fetchData()
  }, [])

  const handleTopicClick = (topicId) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    )
  }

  const handleLevelClick = (levelId) => {
    setSelectedLevels(prev => 
      prev.includes(levelId) 
        ? prev.filter(id => id !== levelId)
        : [...prev, levelId]
    )
  }

  const handleToolClick = (toolId) => {
    setSelectedTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    )
  }
  
  const handlePriceClick = (priceId) => {
    setSelectedPrice(prev => 
      prev.includes(priceId) 
        ? prev.filter(id => id !== priceId)
        : [...prev, priceId]
    )
  }

  const toggleTopics = (categoryId) => {
    setOpenTopics(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  return (
    <div className='flex flex-col gap-4'> 
      <FilterContainer 
        title="CATEGORY"
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      >
        {categories.map(category => (
          <div key={category.id} 
            className={`flex flex-col rounded-sm transition-colors duration-200 bg-white`}
            onClick={(e) => {
              e.preventDefault()
              toggleTopics(category.id)
            }}
          >
            <label className='flex items-center justify-between p-2 cursor-pointer'>
              <div className='flex items-center gap-2'>
                <Cpu size={20} className={`transition-colors duration-100
                  ${openTopics[category.id] ? 'text-primary' : 'text-light'}`}
                />
                <span className='transition-colors duration-200 text-dark'>
                  {category.name}
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <ChevronDown 
                  size={16} 
                  className={`cursor-pointer transition-all duration-200
                    ${openTopics[category.id] 
                      ? 'rotate-180 text-primary' 
                      : 'text-light'}`}
                />
              </div>
            </label>

            {openTopics[category.id] && (
              <div className='flex flex-col gap-1 mt-1 mx-2 mb-2'>
                {category.topics?.map(topic => (
                  <FilterTopic
                    key={topic.id}
                    topic={topic}
                    isSelected={selectedTopics.includes(topic.id)}
                    onToggle={handleTopicClick}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </FilterContainer>

      <FilterContainer 
        title="COURSE LEVEL"
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      >
        <div className='flex flex-col gap-1 mt-1 mx-2 mb-2'>
          {courseLevels.map(level => (
            <FilterTopic
              key={level.id}
              topic={level}
              isSelected={selectedLevels.includes(level.id)}
              onToggle={handleLevelClick}
            />
          ))}
        </div>
      </FilterContainer>
      
      <FilterContainer 
        title="TOOLS"
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      >
        <div className='flex flex-col gap-1 mt-1 mx-2 mb-2'>
          {tools.map(tool => (
            <FilterTopic
              key={tool.id}
              topic={tool}
              isSelected={selectedTools.includes(tool.id)}
              onToggle={handleToolClick}
            />
          ))}
        </div>
      </FilterContainer>
      
      <FilterContainer 
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
              isSelected={selectedPrice.includes(price.id)}
              onToggle={handlePriceClick}
            />
          ))}
        </div>
      </FilterContainer>
    </div>
  )
}

export default FilterSection