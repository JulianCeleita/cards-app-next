import { Character } from "../models";

export const getCharacters = (): Promise<Character[]> => {
  const urlHeroe = `https://superheroapi.com/api/1646193842463635/1`;
  //const urlWithId = `${url}/${id}`;     
  
  return fetch(urlHeroe)
    .then((response) => response.json())
    .then((data) => data);
};

