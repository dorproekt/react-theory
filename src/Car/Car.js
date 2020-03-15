import React from 'react';
import './Car.css';

// function Car() {
//     return (
//         <h3>This is car component</h3>
//     )
// }
// const car = () => {
//   return (
//       <h3>This is car component</h3>
//   );
// };
export default (car) => {

    const inputClasses = ['input'];

    if(car.name !== ''){
        inputClasses.push('green');
    }else{
        inputClasses.push('red');
    }

    if(car.name.length > 4){
        inputClasses.push('bold');
    }

    return(
        <div className='Car'>
            <h3>Car name: {car.name}</h3>
            <p>Car year: {car.year}</p>
            <input
                type="text"
                onChange={car.onChangeName}
                value={car.name}
                className={inputClasses.join(' ')}
            />
            <button onClick={car.onDelete}>Delete</button>
        </div>
    )

};