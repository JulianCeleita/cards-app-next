import { Card } from "../../components";
import { getCharacters } from "./services";

async function fetchCharacters() {
  return await getCharacters();
}

async function Characters() {
  const characters = await fetchCharacters();
  return (
    <div>
      {characters.map((characters)=>(
        <Card key={characters.id} data={characters}/>
      ))}
    </div>
  );
}
export default Characters;
