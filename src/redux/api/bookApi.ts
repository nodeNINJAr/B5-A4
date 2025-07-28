import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBook } from "../../types";



// Create the API
export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['book'],
  endpoints: (builder) => ({
    // GET all books
    getBooks: builder.query<IBook[], void>({
      query: () => '/books',
      providesTags: ['book'],
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

    // DELETE a book by ID
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['book'],
    }),
  }),
});

// Export hooks
export const { useGetBooksQuery, useDeleteBookMutation , useAddBookMutation} = bookApi;
