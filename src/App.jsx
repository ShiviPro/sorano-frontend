import { useState } from "react";

const App = () => {
  const allEvents = [
    {
      id: 1,
      title: "The Drawing Competition 2025",
      dateAndTime: "Sunday, April 06, 2025 at 7:30 PM IST",
      type: "Online",
      tags: [
        "Art",
        "Drawing",
        "Figure Drawing",
        "Illustration",
        "Life Drawing",
      ],
    },
    {
      id: 2,
      title: "Fiber Arts Showcase: Unleash Your Creativity",
      dateAndTime: "May 25, 2025 at 3:30PM IST",
      type: "Online",
      tags: ["Art", "Yarn", "Creativity", "Fiber Arts", "Felting"],
    },
    {
      id: 3,
      title: "Paint In Central Park (Bucket List Event)",
      dateAndTime: "August 12, 2025 at 10:30AM IST",
      type: "Offline",
      tags: ["Art", "Painting", "Illustration"],
    },
    {
      id: 4,
      title: '"The Hunchback of Notre Dame" by Victor Hugo - Session 1 of 2',
      dateAndTime: "October 17, 2025 at 2PM IST",
      type: "Offline",
      tags: [
        "Classic Books",
        "Literature",
        "Novel Reading",
        "Authors",
        "Writing",
      ],
    },
    {
      id: 5,
      title:
        "A New World Begins: French Revolution by Jeremy D. Popkin | Book Club",
      dateAndTime: "November 11, 2025 at 9AM IST",
      type: "Offline",
      tags: [
        "Non Fiction Book Club",
        "Intellectual Discussions",
        "History",
        "French",
        "Society  ",
      ],
    },
  ];
  const [aptEvents, setAptEvents] = useState(allEvents);
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
        {aptEvents.length ? (
          aptEvents.map((event) => (
            <section key={event.id} className="card mb-4">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={`https://placehold.co/800x600?text=${event.title}`}
                    alt={event.title}
                    className="card-img-start img-fluid"
                  />
                </div>
                <div className="col-md-8 ps-0">
                  <div className="card-body">
                    <h2 className="card-title display-5">{event.title}</h2>
                    <p className="card-text fs-5 fw-light">
                      Date: {event.dateAndTime}
                    </p>
                    <p className="card-text fs-5 fw-light">
                      Type: {event.type}
                    </p>
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
