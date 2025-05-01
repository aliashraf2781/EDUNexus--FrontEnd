import api from "./api"; 

export const getAllInstructors = () => {
  return api.get("/instructors"); 
};

export const getInstructorById = (id) => {
  return api.get(`/instructors/${id}`); 
};

export const addInstructor = (instructorData) => {
  return api.post("/instructors", instructorData); 
};

export const updateInstructor = (id, updatedData) => {
  return api.put(`/instructors/${id}`, updatedData); 
};

export const deleteInstructor = (id) => {
  return api.delete(`/instructors/${id}`); 
};

export const getInstructorsByStatus = (status) => {
  return api.get(`/instructors?status=${status}`); 
};

export const getInstructorCourses = (id) => {
  return api.get(`/instructors/${id}/courses`); 
};
