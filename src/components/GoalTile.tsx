import React from 'react';
import { Intake, Goal } from '../types';

interface GoalTileProps {
  title: string;
  goal: Goal;
  intake: Intake;
}

const GoalTile: React.FC<GoalTileProps> = ({ title, goal, intake }) => {
  const reached = intake.calories >= goal.calories;

  return (
    <div
      className='goal-tile'
      style={{ backgroundColor: reached ? 'lightgreen' : 'lightcoral' }}
    >
      <h2>{title}</h2>
      <p>Calories: {goal.calories}</p>
      <p>Protein: {goal.protein}g</p>
      <p>Carbs: {goal.carbs}g</p>
      <p>Fat: {goal.fat}g</p>
    </div>
  );
};

export default GoalTile;
