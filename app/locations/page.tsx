import { Card } from "../../components";
import { getLocations } from "./services";

async function fetchLocations() {
  return await getLocations();
}

async function Locations() {
  const locations = await fetchLocations();
  return (
    <>
      {locations.map((location)=>(
        <Card key={location.id} data={location}/>
      ))}
    </>
  );
}
export default Locations;
