import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./api/bookApi";



export const store = configureStore({
      reducer:{
            // 
          [bookApi.reducerPath] : bookApi.reducer,
      },
      // middleware
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bookApi.middleware),
})



// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']