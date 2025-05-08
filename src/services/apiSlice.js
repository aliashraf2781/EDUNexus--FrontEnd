import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rat-intent-hideously.ngrok-free.app",
    prepareHeaders: (headers) => {
      headers.set("ngrok-skip-browser-warning", "1");
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/api/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/api/auth/users",
        method: "GET",
      }),
    }),
    updateUserByAdmin: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/auth/users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
    addCourse: builder.mutation({
      query: (courseData) => ({
        url: "/api/courses", // adjust this path if your actual endpoint differs
        method: "POST",
        body: courseData,
      }),
      invalidatesTags: ["Courses"],
    }),
    getUserData: builder.query({
      query: () => ({
        url: "/api/auth/me",
        method: "GET",
      }),
    }),
    getCourses: builder.query({
      query: () => ({
        url: "/api/courses",
        method: "GET",
      }),
      providesTags: ["Courses"],
    }),
    getLessonsByCourseId: builder.query({
      query: (courseId) => `/api/courses/${courseId}/lessons`,
    }),
    saveLesson: builder.mutation({
      query: ({ courseId, ...lessonData }) => ({
        url: `/api/courses/${courseId}/lessons`,
        method: "POST",
        body: lessonData,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetAllCoursesQuery,
  useGetAllUsersQuery,
  useUpdateUserByAdminMutation,
  useAddCourseMutation,
  useGetUserDataQuery,
  useGetCoursesQuery,
  useGetLessonsByCourseIdQuery,
  useSaveLessonMutation,
} = apiSlice;
