import { actionsTypes } from "../actions/actionsTypes";

const initialState : BookState = {
    books : [
    { isbn: '1234', title: 'Book 1', author: 'Author 1', id: 1 },
    { isbn: '4567', title: 'Book 2', author: 'Author 2', id: 2 }
]};

const reducer = (state: BookState = initialState, action: BookAction) : BookState => {
    switch (action.type) {
        case actionsTypes.ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.book]
            }
        case actionsTypes.UPDATE_BOOK:
            return {
                ...state,
                books: state.books.map(book => book.isbn === action.book.isbn ? action.book : book)
            }
        case actionsTypes.DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book.isbn !== action.book.isbn)
            }
        default:
            return state;
    }
}

export default reducer;