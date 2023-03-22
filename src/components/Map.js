import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ data }) => {
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/4904/4904149.png",
    iconSize: [30, 30],
  });
  const markers = data.map((item) => {
    const location = [item.latitude, item.longitude];
    return location;
  });

  return (
    <>
      <MapContainer center={[46.116, 3.41]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((position, index) => (
          <Marker key={index} position={position} icon={customIcon} />
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
