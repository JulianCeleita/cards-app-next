import Image from "next/image";
import "./Card.css";

interface CardData {
  name: string;
  type?: string;
  created: string;
  image?: string;
}

export interface Props {
  data: CardData;
}

function Card({ data }: Props) {
  let formattedType = data.type;
  formattedType ||= "No type";

  return (
    <div className="Card">
      <p>Name:{data.name}</p>
      <p>Type: {formattedType}</p>
      <p>Created: {data.created}</p>
      { !!data.image && (
      <Image width="100" height="100" alt="Image" src={data.image} />
      )}
      </div>
  );
}

export default Card;
