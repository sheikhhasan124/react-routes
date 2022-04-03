import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const {id}=useParams()

    const [mealDetail, setMealDetail]=useState({})
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        console.log(url)
     fetch(url)
     .then(res=>res.json())
     .then(data=>setMealDetail(data.meals[0]))
    },[])
    return (
        <div>
            <h2>meal detail{id}</h2>
            <h3>{mealDetail.strMeal}</h3>
            <h3>{mealDetail.strInstructions.slice(0,100)}</h3>
        </div>
    );
};

export default MealDetail;