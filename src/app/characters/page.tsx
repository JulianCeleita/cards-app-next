import { getCharacters } from './services/characters.service';

async function fethCharacters() {
  return await getCharacters();
}

async function Characters() {
  const characters = await getCharacters();
  return <div>{JSON.stringify(characters)}</div>
}

export default Characters