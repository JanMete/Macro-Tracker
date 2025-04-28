import React, { useState } from 'react';
import { Food } from '../types';

interface FoodItemProps {
  food: Food;
  onUpdate: (food: Food, grams: number) => void;
}

const FoodItem: React.FC<FoodItemProps> = ({ food, onUpdate }) => {
  const [grams, setGrams] = useState<number>(0);

  const handleApply = () => {
    onUpdate(food, grams);
  };

  return (
    <div className='food-item'>
      <img src={food.image || 'placeholder.jpg'} alt={food.name} width='100' />
      <h3>{food.name}</h3>
      <p>
        Per 100g: {food.calories}cal / {food.protein}P / {food.carbs}C /{' '}
        {food.fat}F
      </p>
      <input
        type='number'
        value={grams}
        onChange={(e) => setGrams(Number(e.target.value))}
        placeholder='grams eaten'
      />
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default FoodItem;
