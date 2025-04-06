import Socials from "../Socials/Socials";

const data = {
  name: "Marci Metzger",
  title: "Realtor for Nearly 3 Decades!",
  description:
    "#1 Pahrump Residential Sales Last 5 Years & LV Top 100 Residential Sales 2019 - OWNER - THE RIDGE REALTY GROUP - #S.0175273",
  phoneNumber: "206-919-6886",
  icon: "",
  img: "about-img.png",
};

function About() {
  return (
    <section id="about">
      <div className="container-fluid">
        <div className="row pw-1800">
          <div className="col-12 col-md-6 col-md-6 about-img">
            <img src={`./${data.img}`} alt={data.name} />
          </div>
          <div className="col-12 col-md-6 col-md-6 ">
            <h3 data-animation="textInUp" data-delay="1">
              {data.name}
            </h3>
            <h4 data-animation="textInUp" data-delay="2">
              {data.title}
            </h4>
            <p data-animation="textInUp" data-delay="3">
              {data.description}
            </p>
            <a
              className="about-btn"
              href={`tel:${data.phoneNumber}`}
              data-animation="textInUp"
              data-delay="4"
            >
              <span className="me-3">
                <i class="bi bi-telephone"></i>
              </span>
              {data.phoneNumber}
            </a>
            <Socials size="20px" delay="4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
