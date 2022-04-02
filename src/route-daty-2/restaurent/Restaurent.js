import React from 'react';

const Restaurent = () => {

    const searchFood = (e)=>{
        console.log(e.target.value)
    }
    return (
        <div>
            <h2>find the food</h2>
            <input onChange={searchFood} type="text" />
        </div>
    );
};

export default Restaurent;