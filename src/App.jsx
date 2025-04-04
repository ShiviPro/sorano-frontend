const App = () => {
  return (
    <main className="py-4 container">
      <section className="row">
        <div className="col-md-4">
          <label htmlFor="eventTypeSelect">Select Event Type:</label>
          <select id="eventTypeSelect" className="form-select mt-1">
            <option value="Both">Both</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
      </section>
      <section className="pt-4">
        <section className="card mb-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://placehold.co/800x600?text=Event+1"
                alt="event name"
                className="card-img-start img-fluid"
              />
            </div>
            <div className="col-md-8 ps-0">
              <div className="card-body">
                <h2 className="card-title display-5">Event 1</h2>
                <p className="card-text fs-5 fw-light">Date: Event Date</p>
                <p className="card-text fs-5 fw-light">Type: Offline/Online</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card mb-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://placehold.co/800x600?text=Event+2"
                alt="event name"
                className="card-img-start img-fluid"
              />
            </div>
            <div className="col-md-8 ps-0">
              <div className="card-body">
                <h2 className="card-title display-5">Event 2</h2>
                <p className="card-text fs-5 fw-light">Date: Event Date</p>
                <p className="card-text fs-5 fw-light">Type: Offline/Online</p>
              </div>
            </div>
          </div>
        </section>
        <section className="card mb-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://placehold.co/800x600?text=Event+3"
                alt="event name"
                className="card-img-start img-fluid"
              />
            </div>
            <div className="col-md-8 ps-0">
              <div className="card-body">
                <h2 className="card-title display-5">Event 3</h2>
                <p className="card-text fs-5 fw-light">Date: Event Date</p>
                <p className="card-text fs-5 fw-light">Type: Offline/Online</p>
              </div>
            </div>
          </div>
        </section>
        <section className="card mb-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://placehold.co/800x600?text=Event+4"
                alt="event name"
                className="card-img-start img-fluid"
              />
            </div>
            <div className="col-md-8 ps-0">
              <div className="card-body">
                <h2 className="card-title display-5">Event 4</h2>
                <p className="card-text fs-5 fw-light">Date: Event Date</p>
                <p className="card-text fs-5 fw-light">Type: Offline/Online</p>
              </div>
            </div>
          </div>
        </section>
        <section className="card mb-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://placehold.co/800x600?text=Event+5"
                alt="event name"
                className="card-img-start img-fluid"
              />
            </div>
            <div className="col-md-8 ps-0">
              <div className="card-body">
                <h2 className="card-title display-5">Event 5</h2>
                <p className="card-text fs-5 fw-light">Date: Event Date</p>
                <p className="card-text fs-5 fw-light">Type: Offline/Online</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default App;
