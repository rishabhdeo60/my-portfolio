import React from 'react';
import './App.css';

const App = (props) => {
    let a=10, b=20;
    let sum = a+b;
    return(
        <>
            <div className='content'>The sum of {a} and {b} is {sum}.</div>
        </>
    );
}

export default App;