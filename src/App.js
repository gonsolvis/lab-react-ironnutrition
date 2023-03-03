// src/App.js
import './App.css';
import foodsJSON from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
// import Search from './components/Search ';
import { useState } from 'react';

function App() {
  const [comidas, setComidas] = useState(foodsJSON);

  const createFood = (comida) => {
    setComidas([comida, ...comidas]);
  }
  const deleteHandler = (foodName) => {
    setComidas(comidas.filter(comida => comida.name !== foodName)); //LIFT STATE UP
  }


  const filterFood = (text) => setComidas(comidas.filter(comida => comida.name.toLowerCase().includes(text.toLowerCase())));

  return <div className="App">
    <Search filter={filterFood} />
    <AddFoodForm createFood={createFood} />


    <div className="w-20 h-30">
      {comidas.map(comida => <FoodBox name={comida.name} calories={comida.calories} image={comida.image} servings={comida.servings} deleteHandler={() => deleteHandler(comida.name)} key={comida.name} />)}
    </div>




  </div>



}

export default App;