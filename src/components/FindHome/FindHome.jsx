function FindHome() {
  return (
    <section id="find-home">
      <div className="container-fluid find-home-bg text-center">
        <h2>Find Your Dream Home!</h2>
        <div className="find-home-form mw-900">
          <form action="">
            <h3>Search Listings</h3>
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column text-start">
                <label for="location">Location</label>
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
                <label for="type">Type</label>
                <select id="type" name="type">
                  <option value="">Any</option>
                  <option value="7">Land</option>
                  <option value="11">Residential Lease</option>
                  <option value="6">High Rise</option>
                  <option value="1">Residential</option>
                </select>
              </div>
              <div className="col-12 col-md-4 col-lg-4 d-flex flex-column text-start">
                <label for="sortby">Sort By</label>
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
          </form>
        </div>
      </div>
    </section>
  );
}

export default FindHome;
