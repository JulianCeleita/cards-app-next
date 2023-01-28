import { Character } from '../../app/characters/models/character.model';

interface Props {
    data: Character;
}

function Card({ data }: Props) {
  return (
    <div>
        <p>Name:{data.name}</p>
        <p>Type: {data.type}</p>
        <p>Created: {data.created}</p>
    </div>
  )
}

export default Card