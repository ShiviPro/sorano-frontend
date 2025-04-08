import { useParams } from "react-router-dom";
import { allEvents } from "../App";

const EventDetails = () => {
  const eventId = useParams().eventId;
  const event = allEvents.find((event) => event.id == eventId);

  return (
    <main className="py-4 bg-light">
      <div className="container">
        <article className="row">
          <div className="col-md-8">
            <h2>{event.title}</h2>
            {event.presentors.length > 0 && (
              <>
                <p className="mb-0">Hosted By:</p>
                {event.presentors.map((presentor) => (
                  <p key={presentor}>
                    <strong>{presentor}</strong>
                  </p>
                ))}
              </>
            )}

            <section className="pt-3">
              <img src={event.posterUrl} alt={event.title} />
            </section>

            <section className="pt-3">
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
          <aside className="col-md-4 mt-2">
            <section className="card">
              <div className="card-body p-4 pb-2">
                <div className="d-flex align-items-center pb-3">
                  <p className="me-2">
                    <i className="fa-solid fa-clock"></i>
                  </p>{" "}
                  <p>{event.dateAndTime}</p>
                </div>
                <div className="d-flex align-items-center pb-3">
                  <p className="me-2">
                    <i className="fa-solid fa-location-dot"></i>
                  </p>{" "}
                  <p>{event.venue}</p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="me-2">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </p>{" "}
                  <p>{event.price == 0 ? "Free" : event.price}</p>
                </div>
              </div>
            </section>
            {event.presentors.length > 0 && (
              <section className="pt-4 mt-2">
                <h3 className="">Speakers: ({event.presentors.length})</h3>
                <div className="row ms-0 mt-3 mb-0">
                  {event.presentors.map((currPresentor) => (
                    <div key={currPresentor} className="col-6 card">
                      <div className="card-body p-2">
                        <p className="card-text fw-bold">{currPresentor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            <div className="row mt-4 pt-2">
              <div className="text-center">
                <button className="col-md-6 btn btn-primary">RSVP</button>
              </div>
            </div>
          </aside>
        </article>
      </div>
    </main>
  );
};

export default EventDetails;
