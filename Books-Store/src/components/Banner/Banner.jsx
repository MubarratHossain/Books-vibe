import React from 'react';
import BookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-auto lg:h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={BookImg}
            className="w-full max-w-xs lg:max-w-sm rounded-lg shadow-2xl mb-4 lg:mb-0"
            alt="Bookshelf Image"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn btn-primary mt-4 lg:mt-6">View The List</button>
          </div>
        </div>
      </div>
      
    );
};

export default Banner;