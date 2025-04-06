import { useState } from "react";
import SellBtn from "./SellBtn";

const sellData = [
  {
    id: 1,
    buttonText: "Top Residential Sales Last 5 Years",
    img: "./readyToSell1",
    description:
      "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
  },
  {
    id: 2,
    buttonText: "Don't Just List it...",
    img: "./readyToSell2",
    description:
      "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
  },
  {
    id: 3,
    buttonText: "Guide to Buyers",
    img: "./readyToSell3",
    description:
      "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
  },
];

function ReadyToSell() {
  const [image, setImage] = useState(sellData[0].img);
  const [description, setDescription] = useState(sellData[0].description);
  const [btnText, setBtnText] = useState(sellData[0].buttonText);
  const [isSelected, setIsSelected] = useState(sellData[0].id);

  function handlerChange(item) {
    setImage(item.img);
    setDescription(item.description);
    setBtnText(item.buttonText);
    setIsSelected(item.id);
  }

  return (
    <section id="get-sold">
      <div className="container-fluid pw-1800 text-center">
        <h2 data-animation="fadeSlowInUp" data-delay="3">
          Ready to Sell? We’ve Got You Covered!
        </h2>
        <div className="row mt-5">
          <div
            className="col-12 col-md-6 order-1 order-md-2 d-flex flex-column mb-3"
            data-animation="fadeSlowInUp"
            data-delay="3"
          >
            <img src={`./${image}.webp`} alt={btnText} />
            <p>{description}</p>
          </div>
          <div
            className="col-12 col-md-6 order-2 order-md-1 d-flex flex-column "
            data-animation="fadeSlowInUp"
            data-delay="3"
          >
            {sellData.map((item) => (
              <SellBtn
                buttonText={item.buttonText}
                key={item.id}
                isSelected={item.id === isSelected}
                onClick={() => handlerChange(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadyToSell;
