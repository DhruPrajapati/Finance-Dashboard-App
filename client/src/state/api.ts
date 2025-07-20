import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetKpisResponse } from "./types";

export const api = createApi({
  reducerPath: "main",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["Kpis", "Predictions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "/kpi",
    }),
    getPredictionsData: build.query({
      query: () => "/predictions",
    }),
  }),
});

export const { useGetKpisQuery } = api;
