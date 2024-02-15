import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

export default function StarRating({noOfStar}){

    const [rating, setRating]=useState(0)
    const [hover, setHover]=useState(0)

    function handleClick(getCurrentIndex){
        console.log(getCurrentIndex)
        setRating(getCurrentIndex)

    }
    function handleMouseEnter(getCurrentIndex){
        console.log(getCurrentIndex)
        setRating(getCurrentIndex)

    }
    function handleMouseLeave(getCurrentIndex){
        setHover(rating)
    }
    return (
        <div className="star-rating">
          {[...Array(noOfStar)].map((_, index) => {
            const starValue = index + 1;
            return (
              <FaStar
                key={index}
                onClick={() => handleClick(starValue)}
                onMouseEnter={() => handleMouseEnter(starValue)}
                onMouseLeave={handleMouseLeave}
                size={40}
                color={(starValue <= (hover || rating)) ? "#ffc107" : "#e4e5e9"}
              />
            );
          })}
        </div>
      );
}