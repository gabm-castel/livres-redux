import React, { Dispatch } from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../redux/actions/actions";

const ListBooks: React.FC = function () {
    const books:readonly Book[] = useSelector((state: BookState) => state.books, shallowEqual)

    const dispatch: Dispatch<any> = useDispatch();

    const delBook = React.useCallback(
        (book: Book) => dispatch(deleteBook(book)),
        [dispatch]
    );
    
    return (
        <div>
            <h1>List Books</h1>
            <Link className="btn btn-success" to={'/books/add'}>Ajouter un livre</Link>
            <table className="w-100">
                <thead className="w-100">
                    <tr className="w-100">
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => (
                            <tr key={index}>
                                <th scope="row">{book.isbn}</th>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/books/update/${book.isbn}`}>Modifier</Link>
                                    <button className="btn btn-danger" onClick={()=>{delBook(book)}}>Supprimer</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListBooks;