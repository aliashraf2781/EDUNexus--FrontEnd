import api from './api';

export const getAllCourses = () => {
    return api.get('/courses');
};

export const getPrices = () => {
    return api.get('/prices');
};

export const getLessons = () => {
    return api.get('/lesson');
};

export const getInstructors = () => {
    return api.get('/instructors');
};

export const getStudents = () => {
    return api.get('/students');
};

export const getRelatedCourses = () => {
    return api.get('/courses?_limit=5');
};

export const getAllSubjects = () => {
    return api.get('/subjects');
};

export const getAllGrades = () => {
    return api.get('/grades');
};

export const getAllInstructors = () => {
    return api.get('/instructors');
};

export const getAllPromocodes = () => {
    return api.get('/promocodes');
};

export const addPromocodes = (promoData) => {
    return api.post('/promocodes', promoData);
};