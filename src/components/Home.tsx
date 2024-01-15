import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Book app with redux</h1>
            <Link className="btn btn-success" to="/books">Books</Link>
        </>
    );
}