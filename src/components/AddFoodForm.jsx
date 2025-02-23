import { Divider, Input } from 'antd';
import { useState } from "react";



// Iteration 4
export default function AddFoodForm({ createFood }) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const nameHandler = (e) => setName(e.target.value);
  const imageHandler = (e) => setImage(e.target.value);
  const caloriesHandler = (e) => setCalories(e.target.value);
  const servingsHandler = (e) => setServings(e.target.value);;

  const submitHandler = (e) => {
    e.preventDefault();

    createFood({ name, image, calories, servings });
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  }
  return (
    <form onSubmit={submitHandler}>
      <Divider> Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={nameHandler} />
      <label>Image</label>
      <Input value={image} type="text" onChange={imageHandler} />
      <label>Calories</label>
      <Input value={calories} type="text" onChange={caloriesHandler} />
      <label>Servings</label>
      <Input value={servings} type="text" onChange={servingsHandler} />

      <button type="submit">Create</button>
    </form>


  );
}

