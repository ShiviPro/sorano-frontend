import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const EventDetails = () => {
  const eventId = useParams().eventId;
  const {
    data: event,
    loading,
    error,
  } = useFetch(`https://sorano-backend.vercel.app/events/${eventId}`);

  return (
    <main className="py-4 bg-light">
      <div className="container">
        {loading && <div className="alert alert-info">Loading...</div>}
        {error && (
          <div className="alert alert-danger">
            Failed to fetch event details!
          </div>
        )}
        {!event ? (
          <div className="alert alert-danger">Event Not Found!</div>
        ) : (
          <article className="row">
            <div className="col-md-8">
              <h2>{event.title}</h2>
              {event.presentors?.length > 0 && (
                <>
                  <p className="mb-0">Hosted By:</p>
                  {event.presentors?.map((presentor) => (
                    <p key={presentor.name}>
                      <strong>{presentor.name}</strong>
                    </p>
                  ))}
                </>
              )}

              <section className="pt-3">
                <img src={event.posterUrl} alt={event.title} />
              </section>

              <section className="pt-3">
                <h3>Details:</h3>
                <pre
                  style={{ fontFamily: "inherit" }}
                  className="fs-5 fw-light"
                >
                  {event.description}
                </pre>
              </section>

              <section>
                <h3>Additional Information:</h3>
                {event.additionalInfo?.length > 0 || <p>None</p>}
                <ul>
                  {event.additionalInfo?.length > 0 &&
                    event.additionalInfo?.map((currInfo) => (
                      <li key={currInfo}>{currInfo}</li>
                    ))}
                </ul>
              </section>

              <section>
                <h3>Event Tags:</h3>
                {event.tags?.map((currTag) => (
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
              {event.presentors?.length > 0 && (
                <section className="pt-4 mt-2">
                  <h3 className="">Speakers: ({event.presentors.length})</h3>
                  <div className="row ms-0 mt-3 mb-0">
                    {event.presentors?.map((currPresentor) => (
                      <div key={currPresentor.name} className="col-6 card">
                        <div className="card-body p-2 pb-0 text-center">
                          <img
                            src={currPresentor.profileImgUrl}
                            alt={currPresentor.name}
                            className="rounded-circle my-2"
                          />
                          <p>
                            <strong>{currPresentor.name}</strong>
                          </p>
                          {currPresentor.designation && (
                            <p>{currPresentor.designation}</p>
                          )}
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
        )}
      </div>
    </main>
  );
};

export default EventDetails;
