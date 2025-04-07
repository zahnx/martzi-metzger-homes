import Socials from "../Socials/Socials";
import Button from "../Button/Button";

function Footer() {
  return (
    <section id="footer">
      <div className="container-fluid pw-1800">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-5 footer-col-1">
            <img className="footer-img" src="/logo.webp" alt="" />
            <Socials size="20px" delay="1" />
          </div>
          <div className="col-12 col-md-6 col-lg-2 mb-5">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Listings</a>
              </li>
              <li>
                <a href="#">Let's Move</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-5">
            <h3>Office Hours</h3>
            <p>Open Daily: 08:00 a.m - 07:00 p.m</p>
            <p>
              Appointments outside office hours available upon request. Just
              call!
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5">
            <h3>Contact Us</h3>
            <p className="footer-company">
              Marci Metzger - THE RIDGE REALTY GROUP
            </p>
            <p className="footer-address">
              3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
            </p>
            <p className="footer-telephone">(206) 919-6886</p>

            <h3 className="mt-5">Send Us A Message!</h3>
            <form action="">
              <label htmlFor="fullname">Name</label>
              <input type="text" name="fullname" id="fullname"></input>
              <label htmlFor="email">Email *</label>
              <input type="text" name="email" id="email"></input>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="5"
                placeholder=""
              ></textarea>
              <div className="footer-btn-cont d-flex justify-content-center justify-content-lg-end">
                <Button type="primary" ariaLabel="Submit Form" btnType="submit">
                  <i class="bi bi-arrow-right"></i>
                </Button>
              </div>
            </form>
          </div>
          <div className="col-12 mt-5">
            <div className="footer-logo-container">
              <img src="./footerLogo1.webp" alt="The Ridge Realty Group Logo" />
              <img
                src="./footerLogo2.webp"
                alt="Equal Housing Opportunity Logo"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img src="./footerLogo3.png" alt="Realtor Logo" />
              <img
                src="./footerLogo4.png"
                alt="Pharump Vallery Chamber of Commerce Logo"
              />
            </div>
            <div className="col-12 mt-5 copyright ">
              <p>Copyright © 2023 Marci METZGER Homes - All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
