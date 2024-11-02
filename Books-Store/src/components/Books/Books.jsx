import React, { useEffect, useState } from 'react';
import Book from '../Book/book';

const Books = () => {

    const [books,setBooks]=useState([]);

    useEffect(()=>{
    fetch('../../../public/booksData.json')
    .then( response => response.json())
    .then(data => setBooks(data));
   


    },[])

    return (
        <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mt-4">Books</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[90%] mx-auto my-6">
          {books.map((book) => (
            <Book book={book} key={book.bookId} />
          ))}
        </div>
      </div>
      
    );
};

export default Books;