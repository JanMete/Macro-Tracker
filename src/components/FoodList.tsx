import React from 'react';
import { Food } from '../types';
import FoodItem from './FoodItem';

interface FoodListProps {
  foods: Food[];
  onUpdate: (food: Food, grams: number) => void;
}

const FoodList: React.FC<FoodListProps> = ({ foods, onUpdate }) => {
  return (
    <div className='food-list'>
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default FoodList;
