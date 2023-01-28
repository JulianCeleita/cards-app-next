
import { getLocations } from "./services";
import Card from '../../../components/Card/Card';

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
