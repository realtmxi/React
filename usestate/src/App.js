import './App.css';
import { useState } from 'react';

function App() {
    const [age, setAge] = useState(0)
    const [inputValue, setInputValue] = useState('');
    const [showText, setShowText] = useState(false);
    const [textColor, setTextColor] = useState("black");
    const [count, setCount] = useState(0);

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      console.log(event.target.value);
    };

    const increaseAge = () => {
      setAge(age + 1);
      console.log(age);
    };

    const increaseCount = () => {
      setCount(count + 1);
    };

    const decreaseCount = () => {
      setCount(count - 1);
    };

    const setToZero = () => {
      setCount(0);
    };
    return (
      <div className="App">
      {age}
      <button onClick={increaseAge}> Increase Age </button>
      <input type="text" onChange= {handleInputChange} />
      {inputValue}

      <button onClick={ () => {setShowText(!showText)}}> Show/Hide </button>
      {showText === true && <h1> Hi My name is Murphy</h1>}
      
      
      <button onClick={
        () => {
          setTextColor(textColor === "black" ? "red" : "black");
        }
      }>
        Show / Hide
      </button>
      <h1 style= {{color : textColor}}> Hi My name is Murphy</h1>
      
      

      <button onClick={increaseCount}> Increase</button>
      <button onClick={decreaseCount}> Descrease</button>
      <button onClick={setToZero}> Set to Zero</button>


      {count}
      </div>


      
    );

}

export default App;
