import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBook } from "../../types";



// Create the API
export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['book',"borrow"],
  endpoints: (builder) => ({
    // GET all books
    getBooks: builder.query<IBook[], void>({
      query: () => '/books',
      providesTags: ['book'],
    }),
    // get one book dat
      getBook: builder.query<void, string>({
      query: (id) => `/books/${id}`,
      providesTags: ['borrow','book'],
    }),
    // add book
    addBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: 'POST',
        body:data,
      }),
      invalidatesTags: ['book'],
    }),

     // get one book data
      updateBook: builder.mutation({
      query: ({id, ...bookData}) => ({
        url:`/books/${id}`,
        method:"PUT",
        body:bookData,
      }),
      invalidatesTags:["book"]
    }),

    // DELETE a book by ID
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['book','borrow'],
    }),

    // borrow book
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: '/borrow',
        method: 'POST',
        body: borrowData,
      }),
      invalidatesTags: ['borrow',"book"],
    }),


    // GET borrowd books
    getBorrowdBooks: builder.query({
      query: () => '/borrow',
      providesTags: ['borrow'],
    }),
  }),
});

// Export hooks
export const { useGetBooksQuery, useDeleteBookMutation , useAddBookMutation, useGetBookQuery, useUpdateBookMutation, useBorrowBookMutation, useGetBorrowdBooksQuery } = bookApi;
