import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/actions/actions";

type Props = {};

const AddBook: React.FC<Props> = () => {
    const navigate = useNavigate();
    //Local state to handle input changes
    const [book, setBook] = React.useState<Book>()

    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
      setBook({
        ...book,
        [e.currentTarget.id]: e.currentTarget.value,
      })
    }

    //Dispatch action Add

    const dispatch: Dispatch<any> = useDispatch()

    const saveBook = React.useCallback(
    (book: Book) => {
        dispatch(addBook(book));
        navigate('/books');
    },
    [dispatch]
    );
    return (
        <div>
        <h1>Add Book Component</h1>
        <form>
            <div className="mb-3">
            <label htmlFor="isbn" className="form-label">Isbn</label>
            <input type="text" className="form-control" id="isbn" name="isbn" onChange={inputHandler} />
            </div>
            <div className="mb-3">
            <label htmlFor="title" className="form-label">Titre</label>
            <input type="text" className="form-control" id="title" name="title" onChange={inputHandler} />
            </div>
            <div className="mb-3">
            <label htmlFor="author" className="form-label">Auteur</label>
            <input type="text" className="form-control" id="author" name="author" onChange={inputHandler} />
            </div>
            <button type="button" className="btn btn-primary" onClick={()=>{
            saveBook(book);
            }
            }>Valider</button>
        </form>
    </div>
    );
}

export default AddBook;