
import './App.css';
import {useState} from 'react';

function App() {
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(0);
  const [alcometer, setAlcometer] = useState(0);

  function alcLevel(e) {
   e.preventDefault()
   let litres = bottles * 0.33;
   let grams = litres * 8 * 4.5;
   let burning = weight / 10;
   let gramsLeft = grams - (burning * time);
    let bloodAlc = 0;
   if (gender === "male") {
    bloodAlc = gramsLeft / (weight * 0.7)
   }
   else {
    bloodAlc = gramsLeft / (weight * 0.6)
   }

   if (bloodAlc < 0) {
     bloodAlc = 0
   }

   setAlcometer(bloodAlc)
  }

  return (
    <form onSubmit={alcLevel}>
      <h3>Calculate blood alcohol level</h3>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)} ></input>
      </div>
      <div>
        <label>Bottles</label>
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
      <label>Time</label>
      <select name="time" value={time} onChange={e => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
      <label class="result">Alcohol in blood amount:</label>
      <output>{alcometer.toFixed(2)}</output>
      </div>
      <div>
        <button>Calculate</button>
      </div>
    </form>
  );
}

export default App;
