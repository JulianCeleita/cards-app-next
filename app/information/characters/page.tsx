import { getCharacters } from "./services";
import Card from '../../../components/Card/Card';

async function fetchCharacters() {
  return await getCharacters();
}

async function Characters() {
  const characters = await fetchCharacters();
  return (
    <>
      {characters.map((character)=>(
        <Card key={character.id} data={character}/>
      ))}
    </>
  );
}
export default Characters;
