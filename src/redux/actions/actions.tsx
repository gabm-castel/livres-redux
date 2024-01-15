import { actionsTypes } from "./actionsTypes"

export const addBook = (book: Book) : BookAction => {
    return {
        type: actionsTypes.ADD_BOOK,
        book
    }
}

export const updateBook = (book: Book) : BookAction => {
    return {
        type: actionsTypes.UPDATE_BOOK,
        book
    }
}

export const deleteBook = (book: Book) : BookAction => {
    return {
        type: actionsTypes.DELETE_BOOK,
        book
    }
}

