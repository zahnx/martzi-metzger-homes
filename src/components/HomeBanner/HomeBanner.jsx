import Button from "../Button/Button";

function HomeBanner() {
  return (
    <section id="home-banner">
      <div className="container-fluid pw-1800">
        <div className="hero-text text-center">
          <span className="animated-slow textInUp animate-1">
            MARCI METZGER - THE RIDGE REALTY GROUP
          </span>
          <h1 className="animated-slow textInUp animate-2">Pahrump Realtor</h1>
          <div className="hero-btn d-flex gap-3 justify-content-center animated-slow textInUp animate-3 my-4">
            <Button className="outline">Explore Properties</Button>
            <Button className="primary">Contact Us</Button>
          </div>
        </div>
        <div className="hero-image animated textInUp animate-3">
          <img src="/home-banner.png" alt="Home Banner" />
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
