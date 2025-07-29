// 
export interface IBook {
    _id: string;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    available: boolean;
}

export interface IBookForm {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
};

export interface IBorrow {
  bookId:string;
  copies:number;
  duedate:string
}