import { useEffect, useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const logo = `/logo.webp`;
  const [isAffixed, setIsAffixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsAffixed(true);
    } else {
      setIsAffixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar fixed-top ${isAffixed ? "affixed" : ""}`}
      id="header"
    >
      <div className="container-fluid pw-1800">
        <a className="navbar-brand" href="#">
          <img className={styles.logo} src={logo} alt="logo" />
        </a>

        {/* Burger icon - only visible on tablets and smaller */}
        <button
          className={`navbar-toggler d-md-none ${styles.customToggler}`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasHeader"
          aria-controls="offcanvasHeader"
          aria-label="Toggle navigation"
        >
          <span>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
                fill="currentColor"
              />
              <path
                d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
                fill="currentColor"
              />
              <path
                d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>

        {/* Desktop links - hidden on small screens, flex on md and up */}
        <div className="d-none d-md-flex align-items-center ms-auto">
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-2">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Listings
              </a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Let's Move
              </a>
            </li>

            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <button
              className={`navbar-toggler ${styles.customToggler}`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasHeader"
              aria-controls="offcanvasHeader"
              aria-label="Toggle navigation"
            >
              <span>
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
                    fill="currentColor"
                  />
                  <path
                    d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </button>
          </ul>
        </div>

        {/* Offcanvas for tablets and below */}
        <div
          className="offcanvas offcanvas-end text-bg-light"
          tabIndex="-1"
          id="offcanvasHeader"
          aria-labelledby="offcanvasHeaderLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasHeaderLabel">
              <a href="#">
                <img className={styles.logoOffCanvas} src={logo} alt="logo" />
              </a>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Listings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Let's Move
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
