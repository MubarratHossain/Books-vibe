import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

       const {bookId} = useParams();
       const data =useLoaderData();
       const Id = parseInt(bookId);

       const book = data.find(book => book.bookId === Id)

       const{bookId:current,image} =book;
       

    return (
        <div key={book.bookId} className="m-4 p-4 border rounded-lg shadow-md flex flex-col sm:flex-row items-start gap-4">
  {/* Image on the left */}
  <img className="w-40 h-auto mb-2 sm:mb-0" src={book.image} alt={book.bookName} />

  {/* Book details on the right */}
  <div>
    <h2 className="text-xl font-semibold mb-2">{book.bookName}</h2>
    <p className="font-medium text-gray-700">Author: {book.author}</p>
    <p className="text-sm text-gray-500 mb-2">Publisher: {book.publisher} ({book.yearOfPublishing})</p>
    <p className="text-sm text-gray-700 mb-2">Category: {book.category}</p>
    <p className="text-sm text-gray-700 mb-2">Tags: {book.tags.join(', ')}</p>
    <p className="text-sm text-gray-700 mb-2">Total Pages: {book.totalPages}</p>
    <p className="text-sm text-gray-700 mb-2">Rating: {book.rating}</p>
    <p className="text-gray-600 mt-2 mb-4">"{book.review}"</p>
    <div>
      <button className="btn btn-outline btn-accent mr-4">Read</button>
      <button className="btn btn-accent">Wishlist</button>
    </div>
  </div>
</div>

    );
};

export default BookDetail;