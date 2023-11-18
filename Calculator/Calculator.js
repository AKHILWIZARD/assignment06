
// import React from 'react'
import {useState} from 'react';
import "./Calculator.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



const Calculator = () => {

    const [input, setInput] = useState('');
    
    const handleButtonClick = (value) => {
      
      if (value === '=') {
        try {
          setInput(eval(input));
        } catch (error) {
          setInput('Error');
        }
      } else if (value === 'C') {
        setInput('');
      } else {
        setInput((prevInput) => prevInput + value);
      }
    };

  return (
    <div className='container'>
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
                <div className="main container">
                    
                    <div className="row">
                        <div className="col-12"><input className='form-control' type="text" placeholder='Type here' value={input} /></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('1')}>1</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('2')}>2</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('3')}>3</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('C')}>C</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('4')}>4</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('5')}>5</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('6')}>6</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('=')}>=</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('7')}>7</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('8')}>8</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('9')}>9</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('+')}>+</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('0')}>0</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('-')}>-</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('/')}>/</button></div>
                        <div className="col-3"><button className='btn btn-outline-dark' onClick={() => handleButtonClick('*')}>x</button></div>

                    </div>

                </div>
            </div>
            <div className="col-sm-4"></div>
            
        </div>

    </div>
  )
}

export default Calculator