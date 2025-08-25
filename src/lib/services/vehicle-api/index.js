import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vehicleApi = createApi({
  reducerPath: "vehicleApi",
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
  tagTypes: ["Vehicles"],
  endpoints: (builder) => ({
    getVehicles: builder.query({
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


        return {
          url: `/vehicle?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Vehicles"],
    }),
    getVehicleById: builder.query({
      query: (id) => ({
        url: `/vehicle/${id}`,
        method: "GET",
      }),
      providesTags: ["Vehicles"],
    }),
    deleteVehicle: builder.mutation({
      query: (id) => ({
        url: `/vehicle/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Vehicles"],
    }),
    updateVehicle: builder.mutation({
      query: ({ id, data }) => ({
        url: `/vehicle/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Vehicles"],
    }),
    createVehicle: builder.mutation({
      query: (data) => ({
        url: `/vehicle`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Vehicles"],
    }),
    addWishlist: builder.mutation({
      query: ({ data, id }) => ({
        url: `/vehicle/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Vehicles"],
    }),
    getStats: builder.query({
      query: () => ({
        url: `/offerRequest/stats/dashboard`,
        method: "GET",
      }),
    }),
    updateServiceStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/vehicle/update/status/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Vehicles"],
    }),
    getAllBrands: builder.query({
      query: () => ({
        url: `/brand`,
        method: "GET",
      }),
      providesTags: ["Vehicles"],
    }),
    getReport: builder.query({
      query: () => ({
        url: `/vehicle/google/analytics`,
        method: "GET",
      }),
      providesTags: ["Vehicles"],
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useCreateVehicleMutation,
  useGetVehicleByIdQuery,
  useAddWishlistMutation,
  useDeleteVehicleMutation,
  useUpdateVehicleMutation,
  useUpdateServiceStatusMutation,
  useGetStatsQuery,
  useGetAllBrandsQuery,
  useGetReportQuery,
} = vehicleApi;
