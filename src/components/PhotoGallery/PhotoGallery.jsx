import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Photos from "./Photos";

const photos = [
  {
    id: 1,
    img: "slider1",
  },
  {
    id: 2,
    img: "slider2",
  },
  {
    id: 3,
    img: "slider3",
  },
  {
    id: 4,
    img: "slider4",
  },
  {
    id: 5,
    img: "slider5",
  },
  {
    id: 6,
    img: "slider6",
  },
  {
    id: 7,
    img: "slider7",
  },
];

function PhotoGallery() {
  const [image, setImage] = useState(photos[0].img);
  const [selectedImg, setSelectedImg] = useState(photos[0].id);
  const [open, setOpen] = useState(false);

  function handleImg(photo) {
    setImage(photo.img);
    setSelectedImg(photo.id);
  }

  const slides = photos.map((photo) => ({
    src: `./${photo.img}.webp`,
  }));

  const currentIndex = photos.findIndex((p) => p.img === image);

  return (
    <section id="photo-gallery">
      <div className="container-fluid text-center pw-1800">
        <h2 data-animation="fadeSlowInUp" data-delay="1">
          Photo Gallery
        </h2>

        <div
          className="active-photo"
          data-animation="fadeSlowInUp"
          data-delay="2"
        >
          <img
            src={`./${image}.webp`}
            alt={image}
            style={{ cursor: "zoom-in" }}
            onClick={() => setOpen(true)}
          />
        </div>

        <div className="photo-buttons-cont">
          {photos.map((photo) => (
            <Photos
              img={photo.img}
              selectedImg={photo.id === selectedImg}
              onClick={() => handleImg(photo)}
              key={photo.id}
              ariaLabel="Photo Gallery Slider Photos"
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
      />
    </section>
  );
}

export default PhotoGallery;
