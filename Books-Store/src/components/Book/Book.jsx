import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Book = ({ book }) => {
    const { bookId,bookName, author, image, rating, tags, category } = book;


    return (
        <Link to={`/books/${bookId}`} >
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="bg-gray-200 rounded-lg m-3">
                    <img src={image} alt="Shoes" className="h-28 m-4" />
                </figure>

                <div className="card-actions justify-start max-w-[90%] mx-auto">
                    <div className="badge badge-outline">{tags[0]}</div>
                    <div className="badge badge-outline">{tags[1]}</div>
                </div>

                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{author}</p>
                </div>

                <div className="w-full mx-auto border-t-2 border-dashed flex justify-between items-center p-4 mt-auto">
                    <p className="text-left">{category}</p>
                    <p className="text-right flex items-center gap-2">
                        {rating} <FaStar className="inline-block text-yellow-500" />
                    </p>
                </div>
            </div>


        </Link>

    );
};

export default Book;