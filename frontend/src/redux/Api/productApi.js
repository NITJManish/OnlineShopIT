import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi=createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:"/api"}),
    endpoints:(builder) =>({
        getProducts:builder.query({
            query:(params) => "/products",
        }),
    }),
});

export const { useGetProductsQuery }= productsApi;