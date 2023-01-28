import { getLocations } from "./services";
import { Card, Navigator} from "../../../components";
import { Routes } from "models";

async function fetchLocations() {
  return await getLocations();
}

async function Locations() {
  const locations = await fetchLocations();
  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.CHARACTERS]} />
      {locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
}
export default Locations;
