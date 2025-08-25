import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videoApi = createApi({
  reducerPath: "videoApi",
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
  tagTypes: ["Videos"],
  endpoints: (builder) => ({
    uploadVideo: builder.mutation({
      query: (formdata) => ({
        url: `/video`,
        method: "POST",
        body: formdata,
      }),
      invalidatesTags: ["Videos"],
    }),
    getVideos: builder.query({
      query: ({ query, page = 1, filters } = {}) => {
        const params = new URLSearchParams();

        if (query) {
          params.append("search", query);
        }

        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            if (value) {
              params.append(key, value);
            }
          });
        }

        params.append("page", page);

        const url = `/video?${params.toString()}`;

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["Videos"],
    }),

    getVideoById: builder.query({
      query: (id) => ({
        url: `/video/${id}`,
        method: "GET",
      }),
      providesTags: ["Videos"],
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/video/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Videos"],
    }),
    updateVehicle: builder.mutation({
      query: ({ id, data }) => ({
        url: `/video/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Videos"],
    }),
    updateVehicleStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/video/update/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Videos"],
    })
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoByIdQuery,
  useUploadVideoMutation,
  useDeleteVideoMutation,
  useUpdateVehicleStatusMutation,
  useUpdateVideoMutation,
} = videoApi;
