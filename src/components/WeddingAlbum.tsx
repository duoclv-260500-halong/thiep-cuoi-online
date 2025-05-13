import React from "react";
import "./WeddingAlbum.css";

const WeddingAlbum: React.FC = () => {
  const images = [
    //@ts-ignore
    require("../assets/anhcuoi1.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi2.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi3.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi4.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi1.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi5.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi2.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi3.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi4.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi5.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi5.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi2.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi3.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi4.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi5.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi5.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi2.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi3.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi4.jpg"),
    //@ts-ignore
    require("../assets/anhcuoi5.jpg"),
  ];

  return (
    <div className="wedding-album">
      <h3>Album ảnh cưới</h3>
      <div className="album-grid">
        {images.map((image, index) => (
          <div key={index} className="album-item">
            <img src={image} alt={`Wedding ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingAlbum;
