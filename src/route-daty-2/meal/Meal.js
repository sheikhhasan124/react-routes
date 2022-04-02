import React from 'react';
import './meal.css'

const Meal = ({meal}) => {
    console.log(meal)
    const {strMeal,strMealThumb,strInstructions}=meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>{strInstructions.slice(0,100)}</p>
        </div>
    );
};

export default Meal;