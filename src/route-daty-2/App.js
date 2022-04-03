import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MealDetail from './mealDetail/MealDetail';
import NotFound from './notFound/NotFound';
import Restaurent from './restaurent/Restaurent';

const App = () => {
    return (
        <div>
         <Routes>
             <Route path="/" element={<Restaurent/>}></Route>
             <Route path="/mealDetail/:id" element={<MealDetail></MealDetail>}></Route>

             <Route path="*" element={<NotFound/>}></Route>
         </Routes>
        </div>
    );
};

export default App;