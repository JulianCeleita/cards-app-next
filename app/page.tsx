import { Routes } from "../models";
import Link from "next/link";
import { Navigator } from "../components";


function App() {
  return (
    <div>
      <h1> Welcome to heroes app</h1>
      <h2> What do you want see?</h2>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
    </div>
  );
}

export default App;
