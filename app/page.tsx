import Image from "next/image";
import { Navigator } from "../components";
import { Routes } from "../models";
import Gladiator from "../public/images/Gladiator.jpg";
import { gladiatorBlur } from "./models";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <h1> Welcome to heroes app</h1>
      <h2> What do you want see?</h2>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
      <Image
        alt="Gladiator"
        src={Gladiator}
        blurDataURL={gladiatorBlur}
        placeholder="blur"
      />
    </div>
  );
}

export default App;
