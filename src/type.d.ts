type Book = {
    id: number;
    isbn: string;
    title: string;
    author: string;
};

type BookAction = {
    type: string;
    book: Book;
};

type BookState = {
    books: Book[];
};

type DispatchType = (args: BookAction) => BookAction;