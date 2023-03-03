// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 5
function Search({filter }) {

  const [text, setFiltro] = useState("");

  const filtroHandler = (e) => {
      setFiltro(e.target.value);
      filter(e.target.value);
  }
//   const submitHandler = (e) => {
//       e.preventDefault();
//       filter(text);
//       setFiltro("");
//   }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={text} type="text" onChange={filtroHandler} />
    </>
  );
}

export default Search;
