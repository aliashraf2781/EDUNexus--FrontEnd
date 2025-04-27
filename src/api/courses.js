import api from './api';

export const getAllCourses = () => {
    return api.get('/courses');
};

export const getAllCategories = () => {
    return api.get('/categories');
};

export const getCourseLevels = () => {
    return api.get('/courseLevels');
};

export const getTools = () => {
    return api.get('/tools');
};

export const getPrices = () => {
    return api.get('/prices');
};

export const getLessons = () => {
    return api.get('/lesson');
};