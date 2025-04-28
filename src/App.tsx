import React, { useState, useEffect } from 'react';
import foods from './data/foods';
import FoodList from './components/FoodList';
import IntakeSummary from './components/IntakeSummary';
import GoalTile from './components/GoalTile';
import './App.css';
import { Intake, Goal } from './types';

const GOALS = {
  deficit: { calories: 2125, protein: 130, carbs: 283, fat: 60 },
  maintenance: { calories: 2625, protein: 160, carbs: 350, fat: 75 },
  bulk: { calories: 3125, protein: 191, carbs: 417, fat: 89 },
} as Record<string, Goal>;

const App: React.FC = () => {
  const [intake, setIntake] = useState<Intake>(() => {
    const saved = localStorage.getItem('intake');
    return saved
      ? JSON.parse(saved)
      : { calories: 0, protein: 0, carbs: 0, fat: 0 };
  });

  useEffect(() => {
    localStorage.setItem('intake', JSON.stringify(intake));
  }, [intake]);

  const handleUpdate = (food: any, grams: number) => {
    const multiplier = grams / 100;
    setIntake((prev) => ({
      calories: prev.calories + food.calories * multiplier,
      protein: prev.protein + food.protein * multiplier,
      carbs: prev.carbs + food.carbs * multiplier,
      fat: prev.fat + food.fat * multiplier,
    }));
  };

  const handleReset = () => {
    setIntake({ calories: 0, protein: 0, carbs: 0, fat: 0 });
    localStorage.removeItem('intake');
  };

  return (
    <div className='app'>
      <h1>Macro Tracker</h1>
      <IntakeSummary intake={intake} onReset={handleReset} />
      <div className='goal-tiles'>
        <GoalTile title='Deficit Goal' goal={GOALS.deficit} intake={intake} />
        <GoalTile
          title='Maintenance Goal'
          goal={GOALS.maintenance}
          intake={intake}
        />
        <GoalTile title='Bulk Goal' goal={GOALS.bulk} intake={intake} />
      </div>
      <FoodList foods={foods} onUpdate={handleUpdate} />
    </div>
  );
};

export default App;
