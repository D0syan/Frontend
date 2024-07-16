import React, { useState } from 'react';
import { Restaurant } from '../../api';
import StarIcon from '../../assets/star.svg?react';
import "./RestaurantCard.css"

interface RestaurantCardProps {
  restaurant: Restaurant;
  onRatingChange: (restaurantId: string, newRating: number) => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (rating: number) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleRatingClick = (rating: number) => {
    onRatingChange(restaurant.id, rating);
  };

  return (
    <div className="restaurant-card">
      <img className='img' src={restaurant.url} alt={restaurant.name} />
      <div className="restaurant-info">
        <h3>{restaurant.name}</h3>
        <p className='text'>{restaurant.description}</p>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => index + 1).map((rating) => (
            <StarIcon
              key={rating}
              className={`staricon ${rating <= hoverRating || rating <= restaurant.raiting ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(rating)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleRatingClick(rating)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
