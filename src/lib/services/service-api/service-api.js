import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Services"],
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: ({ query, page = 1 }) => {
        const params = new URLSearchParams();

        if (query) {
          params.append("search", query);
        }

        params.append("page", page);
        return {
          url: `/service?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Services"],
    }),
    addService: builder.mutation({
      query: (data) => ({
        url: `/service/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
    deleteService: builder.mutation({
      query: (id) => ({
        url: `/service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Services"],
    }),
    updateService: builder.mutation({
      query: ({ data, id }) => ({
        url: `/service/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
    getServiceById: builder.query({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useAddServiceMutation,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
  useGetServiceByIdQuery,
  middleware: serviceApiMiddleware,
  reducerPath: serviceApiReducerPath,
  reducer: serviceApiReducer,
} = serviceApi;
