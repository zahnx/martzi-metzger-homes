import Button from "../Button/Button";

function FindHome() {
  return (
    <section id="find-home">
      <div
        className="container-fluid find-home-bg text-center"
        data-animation="textInUp"
        data-delay="1"
      >
        <h2>Find Your Dream Home!</h2>
        <div className="find-home-form mw-1200">
          <form action="">
            <h3>Search Listings</h3>
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column text-start">
                <label htmlFor="location">Location</label>
                <select id="location" name="location">
                  <option value="">Any</option>
                  <option value="433">Alamo</option>
                  <option value="934">Alton</option>
                  <option value="1026">Amargosa Valley</option>
                  <option value="3118">Beatty</option>
                  <option value="4546">Blue Diamond</option>
                  <option value="5088">Boulder City</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column text-start">
                <label htmlFor="type">Type</label>
                <select id="type" name="type">
                  <option value="">Any</option>
                  <option value="7">Land</option>
                  <option value="11">Residential Lease</option>
                  <option value="6">High Rise</option>
                  <option value="1">Residential</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column text-start">
                <label htmlFor="sortby">Sort By</label>
                <select id="sortby" name="sortby">
                  <option disabled="" hidden="" value=""></option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="pra">Least Expensive to Most</option>
                  <option value="prd">Most Expensive to Least</option>
                  <option value="bda">Bedrooms (Low to High)</option>
                  <option value="bdd">Bedrooms (High to Low)</option>
                  <option value="tba">Bathrooms (Low to High)</option>
                  <option value="tbd">Bathrooms (High to Low)</option>
                </select>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column text-start">
                <div className="row">
                  <div className="col-6 col-md-6 d-flex flex-column">
                    <label htmlFor="bedrooms">Bedrooms</label>
                    <select id="bedrooms" name="bedrooms">
                      <option value="">Any</option>
                      <option value="0">Studio</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                      <option value="6">6+</option>
                    </select>
                  </div>
                  <div className="col-6 col-md-6 d-flex flex-column">
                    <label htmlFor="baths">Baths</label>
                    <select id="baths" name="baths">
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                      <option value="6">6+</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column text-start">
                <div className="row">
                  <div className="col-6 col-md-6 d-flex flex-column">
                    <label htmlFor="min-price">Min Price</label>
                    <input
                      type="number"
                      name="min-price"
                      id="min-price"
                    ></input>
                  </div>
                  <div className="col-6 col-md-6 d-flex flex-column">
                    <label htmlFor="max-price">Max Price</label>
                    <input
                      type="number"
                      name="max-price"
                      id="max-price"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column text-start">
                <Button className="primary">Search Now</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FindHome;
