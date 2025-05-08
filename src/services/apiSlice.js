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
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetAllCoursesQuery,useGetAllUsersQuery ,useUpdateUserByAdminMutation} =
  apiSlice;
