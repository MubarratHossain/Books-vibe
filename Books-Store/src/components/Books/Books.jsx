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
        <div>
            <h2  className='text-2xl font-bold flex justify-center max-w-[90%] mt-4'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4'>
                {
                  books.map(book => <Book book={book} key={book.bookId}></Book>)  
                }
            </div>
        </div>
    );
};

export default Books;