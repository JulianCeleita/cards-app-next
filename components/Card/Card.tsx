import Image from "next/image";
import { Character } from "../../app/characters/models/character.model";
import "./Card.css";

interface Props {
  data: Character;
}

function Card({ data }: Props) {
  let formattedType = data.type;
  formattedType ||= "No type";

  return (
    <div className="Card">
      <p>Name:{data.name}</p>
      <p>Type: {formattedType}</p>
      <p>Created: {data.created}</p>
      <Image width="100" height="100" alt="Image" src={data.image} />
    </div>
  );
}

export default Card;
