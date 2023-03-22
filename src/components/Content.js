import data from "../data/sporteev.json";
// imported Json that is a CSV converted

import SportCard from "./SportCard";
import Map from "./Map";

const Content = () => {
  return (
    <>
      <section className="cards-container">
        <SportCard data={data} />
      </section>

      <section className="map-container">
        <Map data={data} />
      </section>
    </>
  );
};

export default Content;
