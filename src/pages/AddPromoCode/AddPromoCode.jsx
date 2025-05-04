import React, { useState, useEffect } from 'react';
import { getAllPromocodes, addPromocodes, getAllCourses } from '../../api/courses';

const AddPromoCode = () => {
    const [codes, setCodes] = useState([]);
    const [courses, setCourses] = useState([]);
    const [form, setForm] = useState({ 
        code: '', 
        discount: '',
        courseId: '',
    });

    const fetchData = async () => {
        const codesData = await getAllPromocodes()
        const coursesData = await getAllCourses()
        setCodes(codesData.data)
        setCourses(coursesData.data)
    }
  
    useEffect(() => {
        fetchData()
    }, [])

  const handleAdd = async () => {
    if (form.code && form.discount) {
      await addPromocodes({
        ...form,
        code: form.code.toUpperCase(),
        discount: parseInt(form.discount),
        courseId: form.courseId ? parseInt(form.courseId) : null,
      });
      setForm({ code: '', discount: '' });
      fetchData();
      alert('Promo Code Added Successfuly!')
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <form onSubmit={handleAdd} className='space-y-4 bg-white p-6 rounded shadow'>
        <h2 className="text-xl font-bold mb-4">Add Promo Code</h2>
        <input
            type="text"
            placeholder="Promo Code"
            className="border p-2 w-full"
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            required
        />
        <input
            type="number"
            placeholder="Discount %"
            className="border p-2 w-full"
            value={form.discount}
            onChange={(e) => setForm({ ...form, discount: e.target.value })}
            required
        />
        <select 
            value={form.courseId} 
            onChange={(e) => setForm({ ...form, courseId: e.target.value })} 
            className='border p-2 w-full' 
            required
        >
            <option value="">Select Course</option>
            {courses.map((course) => (
                <option key={course.id} value={course.id}>{course.title}</option>
            ))}
        </select>
        <button
            type='submit'
            className="bg-primary text-white px-4 py-2 cursor-pointer"
        >
          Add Promo Code
        </button>
        <div className='w-full mt-4 px-10'>
            <ul>
                {codes.map((c) => (
                <li key={c.id} className="mb-2">
                    <span className="font-bold">{c.code}</span> — {c.discount}%
                </li>
                ))}
            </ul>
        </div>
      </form>
    </div>
  );
};

export default AddPromoCode;