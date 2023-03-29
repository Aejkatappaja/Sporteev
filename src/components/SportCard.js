import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SportCard = ({ data }) => {
  const convertImagesToArray = (imagesString) => {
    return imagesString.split("|");
  };
  return (
    <>
      {data.map((item, idx) => {
        return (
          <div className="card" key={idx}>
            <Carousel
              className="sport-images"
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={true}
              autoPlay={false}
              dynamicHeight={false}
              showArrows={true}
            >
              {convertImagesToArray(item.images).map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
              ))}
            </Carousel>
            <div className="informations">
              <h2>{item.name}</h2>
              <p>{item.address}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default SportCard;
