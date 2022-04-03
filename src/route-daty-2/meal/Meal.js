import React from 'react';
import { useNavigate } from 'react-router-dom';
import './meal.css'

const Meal = ({meal}) => {
    // console.log(meal)
    const {strMeal,strMealThumb,strInstructions,idMeal}=meal;

    const navigate = useNavigate()
      const details=()=>{
          const path = `/mealDetail/${idMeal}`

          navigate(path)
      }

    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>{strInstructions.slice(0,100)}</p>
            <button onClick={details}>details</button>
        </div>
    );
};

export default Meal;