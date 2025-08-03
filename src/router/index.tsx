import { createBrowserRouter } from "react-router";
import App from "../App";
import Books from "../pages/Books";
import CreateBooks from "../pages/CreateBooks";
import BookDetails from "../pages/BookDetails";
import BorrowSummary from "../pages/BorrowSummary";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children:[
        {
            path:'/',
            Component:LandingPage,  
          },
          {
          path:'/books',
          Component:Books,  
        },
          {
          path:'/create-book',
          Component:CreateBooks,  
        },
          {
          path:'/books/:id',
          Component:BookDetails,  
        },
          {
          path:'/edit-book/:id',
          Component:CreateBooks,  
        },
          {
          path:'/borrow/:bookId',
          Component:CreateBooks,  
        },
        {
          path:'/borrow-summary',
          Component:BorrowSummary,  
        },
        {
          path:"*",
          Component:NotFound,
        }
    ]
  },
]);

export default router;