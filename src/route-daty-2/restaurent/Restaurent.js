import React, { useEffect, useState } from 'react';
import Meal from '../meal/Meal';
import './restaurent.css'


const Restaurent = () => {
const [searchText, setSerchText] = useState('');
const [meals, setMeal]=useState([])

useEffect(()=>{
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>setMeal(data.meals))
},[searchText])



    const searchFood = (e)=>{
        setSerchText(e.target.value)
        // console.log(e.target.value)
    }
    return (
        <div className='restaurent'>
            <h2>find the food</h2>
            <input onChange={searchFood} type="text" />
            <h2>results:{meals.length}</h2>
           <div className="mealsContainer">
           {meals.map(meal=><Meal key={meal.idMeal} meal={meal}/>)}
           </div>
        </div>
    );
};

export default Restaurent;