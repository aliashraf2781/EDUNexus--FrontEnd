import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCourses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.allCourses = action.payload;
    },
    updateCourse: (state, action) => {
      const updated = action.payload;
      const index = state.allCourses.findIndex((c) => c.id === updated.id);
      if (index !== -1) {
        state.allCourses[index] = updated;
      }
    },
    removeCourse: (state, action) => {
      state.allCourses = state.allCourses.filter(
        (c) => c.id !== action.payload
      );
    },
    addCourse: (state, action) => {
      state.allCourses.push(action.payload);
    },
  },
});

export const { setCourses, updateCourse, removeCourse, addCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
