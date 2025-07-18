import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export const api = createApi({
  reducerPath: "main",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL || "http://localhost:3001",
  }),
  tagTypes: ["Kpis", "Predictions"],
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis",
    }),
    getPredictionsData: build.query({
      query: () => "/predictions",
    }),
  }),
});

export const { useGetKpisQuery } = api;
