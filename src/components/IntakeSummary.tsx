import React from 'react';
import { Intake } from '../types';

interface IntakeSummaryProps {
  intake: Intake;
  onReset: () => void;
}

const IntakeSummary: React.FC<IntakeSummaryProps> = ({ intake, onReset }) => {
  return (
    <div className='intake-summary'>
      <h2>Today's Intake</h2>
      <p>Calories: {intake.calories.toFixed(1)}</p>
      <p>Protein: {intake.protein.toFixed(1)}g</p>
      <p>Carbs: {intake.carbs.toFixed(1)}g</p>
      <p>Fat: {intake.fat.toFixed(1)}g</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default IntakeSummary;
