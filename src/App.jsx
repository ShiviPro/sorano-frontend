import { useState } from "react";

const App = () => {
  const allEvents = [
    {
      id: 1,
      name: "Event 1",
      dateAndTime: "April 06, 2025 at 7PM IST",
      type: "Online",
    },
    {
      id: 2,
      name: "Event 2",
      dateAndTime: "May 25, 2025 at 3PM IST",
      type: "Offline",
    },
    {
      id: 3,
      name: "Event 3",
      dateAndTime: "August 12, 2025 at 8PM IST",
      type: "Online",
    },
    {
      id: 4,
      name: "Event 4",
      dateAndTime: "October 17, 2025 at 2PM IST",
      type: "Offline",
    },
    {
      id: 5,
      name: "Event 5",
      dateAndTime: "November 11, 2025 at 9AM IST",
      type: "Offline",
    },
  ];
  const [aptEvents, setAptEvents] = useState(allEvents);

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
      </section>
      <section className="pt-4">
        {aptEvents.map((event) => (
          <section key={event.id} className="card mb-4">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={`https://placehold.co/800x600?text=${event.name}`}
                  alt={event.name}
                  className="card-img-start img-fluid"
                />
              </div>
              <div className="col-md-8 ps-0">
                <div className="card-body">
                  <h2 className="card-title display-5">{event.name}</h2>
                  <p className="card-text fs-5 fw-light">
                    Date: {event.dateAndTime}
                  </p>
                  <p className="card-text fs-5 fw-light">Type: {event.type}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default App;
