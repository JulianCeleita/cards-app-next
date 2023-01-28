import { Character } from "../models";

export const getCharacters = ():Promise<Character[]> => {
  const url = "https://superheroapi.com/api/1646193842463635/1";
  //const urlWithId = `${url}/${id}`;     
  
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);
};
