import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  // fetch("https://catfact.ninja/fact")
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data);
  // });
  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    fetchCatFact();
  }, []);


  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
      // console.log(res.data);
    })
  };

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredictedAge(res.data);
    })
  };

  const [type, setType] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`)
      .then((res) => {
        setType(res.data[0].excuse);
    });
  };


  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact</button>
      <p> { catFact }</p>
      <input 
        placeholder='Ex. Pedro...' 
        onChange={ (event) => {
          setName(event.target.value)}
        }/>
      <button onClick={ fetchData }> Predict Age </button>

      <h1> Name: { predictedAge?.name }</h1>
      <h1> Predicted Age: { predictedAge?.age }</h1>
      <h1> Count: { predictedAge?.count }</h1>
      <h1> Generate An Excuse </h1>
      <button onClick={ ()=> fetchExcuse("party")} > Party </button>
      <button onClick={()=> fetchExcuse("family")}> Family </button>
      <button onClick={ ()=> fetchExcuse("office")}> Office </button>

      <p>{type}</p>
    </div>
  );
}

export default App;
