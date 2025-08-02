import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { IBook } from "../../types";




// type
interface InitialState {
    books: IBook[];
    search:string;
}


const initialState : InitialState= {
    books:[],
    search:'',
}




const bookSlice = createSlice({
    name: "book",
    initialState: initialState,
    reducers: {
      // 
      searchFilter:(state, action)=>{
         console.log(action.payload);
           state.search = action.payload.searchTerm;
      }
    }
});









export const selectedBooks = (state:RootState)=>{
  
  // return state.bookManagement.books.filter(book=> book.genre === filter);
  const filteredBooks = state.bookManagement.books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(state.bookManagement.search.toLowerCase()) ||
                            book.author.toLowerCase().includes(state.bookManagement.search.toLowerCase()) ||
                            book.isbn.includes(state.bookManagement.search);
      return matchesSearch;
    });

  return filteredBooks;
}




export const { searchFilter} = bookSlice.actions;




export default bookSlice.reducer;