import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className="container">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<ListBooks />} />
                <Route path="/books/add" element={<AddBook />} />
                <Route path="/books/update/:isbn" element={<UpdateBook />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
