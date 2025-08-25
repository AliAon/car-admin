import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApi = createApi({
  reducerPath: "imageApi",
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
  tagTypes: ["Images"],
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (data) => ({
        url: `/image`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Images"],
    }),
    getImages: builder.query({
      query: ({ query, page = 1, filters }) => {
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

        const url = `/image?${params.toString()}`;
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["Images"],
    }),

    deleteImage: builder.mutation({
      query: (id) => ({
        url: `/image/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Images"],
    }),
    updateImageStatus: builder.mutation({
         query: ({id, data}) => ({
        url: `/image/update/${id}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["Images"],
    })
  }),
});

export const {
  useUploadImageMutation,
  useGetImagesQuery,
  useDeleteImageMutation,
  useUpdateImageStatusMutation,
  middleware: imageApiMiddleware,
  reducerPath: imageApiReducerPath,
  reducer: imageApiReducer,
} = imageApi;
