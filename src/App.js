// src/App.js
import './App.css';
import foodsJSON from "./foods.json";
import FoodBox from './components/FoodBox ';
import AddFoodForm from './components/AddFoodForm ';
import Search from './components/Search ';
import { useState } from 'react';

function App () {
    const [comidas, setComidas] = useState(foodsJSON);
    const createFood = (comida) => {
      setComidas([...comidas, comida]);
    }

    
    const filterList = (text) => {
      setComidas(comidas.filter(comida => comida.title.toLowerCase().includes(text.toLowerCase())));
    

  return <div className="App">

{/* iteraction 1 */}
{/* <div className="w-20 h-30">
  {foods.map(food => <div ><img src={food.image} alt={food.name} height={300} width={400} /><p>{food.name}</p></div>)}
</div> */}

{/* iteraction 2 */}
{/* <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} /> */}

{/* iteraction 3 */}  
<div className="w-20 h-30">
{comidas.map(food => <FoodBox food={food} key={food.name}/>)}
</div>

<AddFoodForm createFood={createFood}/>
<FilterMovie filterList={filterList}/>



{/* <AddMovie createMovie={createMovie}/>
      <FilterMovie filter={filterMovie}/>
      <div className="row mt-5 mb-3 mb-sm-0 w-50 mx-auto">
        {movies.map(movie => <MovieCard patata="hola" movie={movie} deleteHandler={deleteHandler} key={movie._id}/>)}
      </div> */}



      

  </div>;
}
export default App;