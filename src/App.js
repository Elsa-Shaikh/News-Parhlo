import { useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import News from "./component/News";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <NavBar setCategory={setCategory} />
      <News category={category} />
    </>
  );
}

export default App;
