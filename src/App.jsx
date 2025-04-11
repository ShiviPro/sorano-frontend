import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const App = () => {
  const {
    data: aptEvents,
    setData: setAptEvents,
    dataCopy: allEvents,
    loading,
    error,
  } = useFetch("https://sorano-backend.vercel.app/events");
  const [titleOrTagFilter, setTitleOrTagFilter] = useState("");

  const getTitleCase = (sentence) => {
    return sentence
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const findByTitleOrTag = () => {
    if (titleOrTagFilter) {
      setAptEvents(
        allEvents.filter((currEvent) => {
          const eventTitle = currEvent.title.toLowerCase();
          const desiredEventTitle = titleOrTagFilter.toLowerCase();
          if (
            eventTitle === desiredEventTitle ||
            eventTitle.includes(desiredEventTitle)
          ) {
            return currEvent;
          } else if (currEvent.tags.includes(getTitleCase(titleOrTagFilter))) {
            return currEvent;
          }
        })
      );
    } else setAptEvents(allEvents);
  };

  return (
    <main className="py-4 container">
      <section className="row">
        <div className="col-md-4">
          <label htmlFor="eventTypeSelect">Select Event Type:</label>
          <select
            id="eventTypeSelect"
            className="form-select mt-1"
            onChange={(event) => {
              const selectedEventType = event.target.value;
              if (selectedEventType === "Both") {
                setAptEvents(allEvents);
              } else {
                setAptEvents(
                  allEvents.filter(
                    (eachEvent) => eachEvent.type === selectedEventType
                  )
                );
              }
            }}
          >
            <option value="Both">Both</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
        <div className="col-md-8">
          <div className="input-group mt-4">
            <input
              className="form-control mt-1"
              placeholder="Search by title or tag:"
              value={titleOrTagFilter}
              onChange={(event) => setTitleOrTagFilter(event.target.value)}
            />
            <button className="btn btn-primary mt-1" onClick={findByTitleOrTag}>
              Search
            </button>
            <button
              className="btn btn-warning mt-1"
              onClick={() => {
                setTitleOrTagFilter("");
                setAptEvents(allEvents);
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </section>
      <section className="pt-4">
        {loading && <div className="alert alert-info">Loading...</div>}
        {error && (
          <div className="alert alert-danger">
            An error occurred while fetching events!
          </div>
        )}
        {aptEvents?.length ? (
          aptEvents.map((event) => (
            <section key={event._id} className="card mb-4">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={event.posterUrl}
                    alt={event.title}
                    className="card-img-start img-fluid"
                  />
                </div>
                <div className="col-md-8 ps-0">
                  <div className="card-body">
                    <h2 className="card-title display-6">{event.title}</h2>
                    <p className="card-text fs-5 fw-light">
                      Date: {event.dateAndTime}
                    </p>
                    <p className="card-text fs-5 fw-light">
                      Type: {event.type}
                    </p>
                    <Link
                      className="btn btn-primary"
                      to={`/events/${event._id}`}
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))
        ) : (
          <p className="alert alert-danger">No Events Found!</p>
        )}
      </section>
    </main>
  );
};

export default App;
