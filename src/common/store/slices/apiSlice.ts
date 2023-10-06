import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_DEV_URL as string,
    prepareHeaders: (headers) => {
      // if (token) {
      //   headers.set("authorization", `Bearer ${token}`);
      // }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
