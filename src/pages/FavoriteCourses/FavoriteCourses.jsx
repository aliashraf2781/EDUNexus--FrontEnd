import React, { useEffect, useState } from 'react';
import { useFavorites } from '../../context/FavoriteContext';
import CourseCard from '../../components/CourseCard/CourseCard';
import { getAllSubjects } from '../../api/courses';

function FavoriteCourses() {
    const [subjects, setSubjects] = useState([]);
    const { favorites } = useFavorites();

    useEffect(() => {
        const fetchData = async () => {
          const allSubjects = await getAllSubjects();
          setSubjects(allSubjects.data);
        };
        fetchData();
      }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-dark">Your Favorite Courses</h2>
      
      {favorites.length === 0 ? (
        <p className="text-gray-600 text-center">You have no favorite courses yet.</p>
      ) : (
        <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-300">
          {favorites.map((course) => (
            <div key={course.id} className="flex-shrink-0">
              <CourseCard course={course} subject={subjects.find((subject) => (subject.id == course.subject_id))?.name}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteCourses;
