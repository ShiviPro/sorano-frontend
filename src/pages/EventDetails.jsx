import { useParams } from "react-router-dom";
import { allEvents } from "../App";

const EventDetails = () => {
  const eventId = useParams().eventId;
  const event = allEvents.find((event) => event.id == eventId);

  return (
    <main className="container py-4">
      <article className="row">
        <div className="col-md-8">
          <h2>{event.title}</h2>
          <p>Hosted By:</p>
          {event.presentors.map((presentor) => (
            <p key={presentor}>
              <strong>{presentor}</strong>
            </p>
          ))}

          <section>
            <img src={event.posterUrl} alt={event.title} />
          </section>

          <section>
            <h3>Details:</h3>
            <pre style={{ fontFamily: "inherit" }} className="fs-5 fw-light">
              {event.description}
            </pre>
          </section>

          <section>
            <h3>Additional Information:</h3>
            {event.additionalInfo.length > 0 || <p>None</p>}
            <ul>
              {event.additionalInfo.length > 0 &&
                event.additionalInfo.map((currInfo) => (
                  <li key={currInfo}>{currInfo}</li>
                ))}
            </ul>
          </section>

          <section>
            <h3>Event Tags:</h3>
            {event.tags.map((currTag) => (
              <button key={currTag} className="btn btn-primary me-3">
                {currTag}
              </button>
            ))}
          </section>
        </div>
        <aside className="col-md-4">
          <section className="card">
            <div className="card-body">
              <p>
                <i className="fa-solid fa-clock"></i> {event.dateAndTime}
              </p>
              <p>
                <i className="fa-solid fa-location-dot"></i> {event.venue}
              </p>
              <p className="mb-0">
                <i className="fa-solid fa-dollar-sign"></i>{" "}
                {event.price == 0 ? "Free" : event.price}
              </p>
            </div>
          </section>
          <section>
            <h3>Speakers: ({event.presentors.length})</h3>
            <div className="row">
              {event.presentors.map((currPresentor) => (
                <div key={currPresentor} className="col-6 rounded bg-light p-3">
                  {currPresentor}
                </div>
              ))}
            </div>
          </section>
          <button className="btn btn-primary">RSVP</button>
        </aside>
      </article>
    </main>
  );
};

export default EventDetails;
