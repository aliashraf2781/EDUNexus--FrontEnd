import React, { useState } from 'react';
import SingleLecture from './SingleLecture';

const CourseLectures = () => {
  const [lectures, setLectures] = useState([{ id: Date.now() }]);

  const addLecture = () => {
    setLectures([...lectures, { id: Date.now() }]);
  };

  const removeLecture = (id) => {
    setLectures(lectures.filter(lecture => lecture.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Lectures</h2>
        <button
          type="button"
          onClick={addLecture}
          className="bg-[#FF6636] text-white px-4 py-2 rounded-md hover:cursor-pointer"
        >
          + Add Lecture
        </button>
      </div>

      <div className="space-y-4">
        {lectures.map((lecture, index) => (
          <SingleLecture
            key={lecture.id}
            index={index + 1}
            onRemove={() => removeLecture(lecture.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseLectures;
