"use client"
import React, { useState } from 'react';

const ReviewForm = () => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [praise, setPraise] = useState('');

  const handleStarClick = (setRating, rating) => {
    setRating(rating);
  };

  const handleClose = () => {
    // Handle close action here
    console.log('Form closed');
  };

  const handleSubmit = () => {
    alert('Thank you for your review!');
  };

  return (
    <div className="relative max-w-md mx-auto p-6 shadow-md rounded-lg bg-white">
      <button
        className="absolute top-2 left-2 text-gray-500 hover:text-gray-700"
        onClick={handleClose}
      >
        ✖
      </button>
      <h2 className="text-2xl font-semibold mb-4">Leave a review</h2>
      <div>
        <h3 className="font-medium">Safety</h3>
        <div className="flex justify-between my-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-2xl cursor-pointer ${index < safetyRating ? 'text-yellow-500' : 'text-gray-300'}`}
              onClick={() => handleStarClick(setSafetyRating, index + 1)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium">Communication</h3>
        <div className="flex justify-between my-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-2xl cursor-pointer ${index < communicationRating ? 'text-yellow-500' : 'text-gray-300'}`}
              onClick={() => handleStarClick(setCommunicationRating, index + 1)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-medium">Would you recommend Trausti?</h3>
        <div className="flex justify-between my-2">
          <button
            className={`flex-1 py-2 rounded-l-lg text-white mx-1 ${recommend === true ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={() => setRecommend(true)}
          >
            👍
          </button>
          <button
            className={`flex-1 py-2 rounded-r-lg text-white mx-1 ${recommend === false ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={() => setRecommend(false)}
          >
            👎
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-medium">Praise</h3>
        <textarea
          rows="4"
          className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          placeholder="What went well?"
        ></textarea>
        <div className="flex justify-between mt-2">
          <button
            className={`flex-1 py-2 text-white mx-1 ${praise === 'Adventurous' ? 'bg-green-500' : 'bg-gray-300'} rounded-l-lg`}
            onClick={() => setPraise('Adventurous')}
          >
            Adventurous
          </button>
          <button
            className={`flex-1 py-2 text-white mx-1 ${praise === 'Great' ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={() => setPraise('Great')}
          >
            Great
          </button>
          <button
            className={`flex-1 py-2 text-white mx-1 ${praise === 'Not Good' ? 'bg-green-500' : 'bg-gray-300'} rounded-r-lg`}
            onClick={() => setPraise('Not Good')}
          >
            Not Good
          </button>
        </div>
      </div>
      <button
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default ReviewForm;


