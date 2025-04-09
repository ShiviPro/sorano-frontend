import { useState } from "react";
import { Link } from "react-router-dom";

export const allEvents = [
  {
    id: 1,
    title: "The Drawing Competition 2025",
    dateAndTime:
      "Sunday, April 6, 2025 at 10:00 AM to Sunday, April 6, 2025 at 5:00 PM EDT",
    type: "Offline",
    tags: ["Art", "Drawing", "Figure Drawing", "Illustration", "Life Drawing"],
    posterUrl: "https://placehold.co/400x300?text=Drawing+Competition",
    description: `Join up to 100 artists for a full day of drawing from multiple
live models. Starting at 10:00 am on Sunday, April 6th, artists can 
work in three distinct categories:

\u2022 Long Pose Figure Drawing (6-hour pose)
\u2022 Short Pose Figure Drawing (changes every hour)
\u2022 Portrait Drawing (6-hour pose)

A note about the word “competition”: We believe that drawing with 
others of various skill levels drives us to work at our highest abilities. 
This competition is designed to foster camaraderie and inspiration within 
the community. Artists are not required to submit their work for judging.

1. Morning Drawing Session 10:00 am – 1:00 pm.
2. Lunch (not provided) 1:00 – 2:00 pm.
3. Afternoon Drawing Session 2:00 – 5:00 pm.
4. Judging 5:00 pm.
5. Winners Announced 5:30 pm.

Artists may work in dry media only, including graphite, charcoal, and 
pastel pencils. Loose, dry pastels are not permitted for health reasons. 
Artists may work up to 18″x24″. We do not accept digital art for 
submission for judging.

Entry to the space begins at 9:45 am in order of arrival. Seating is 
strictly first come, first served, and seats may not be saved for 
artists who are not present. Each artist will be given two chairs 
to work with, allowing them to place their board on the back of 
one chain and sit on the other. Compact easels are permitted on a 
case-by-case basis (space permitting). Easels may not occupy the 
front row of any model area.`,
    venue: "Drawing New York, 15 Gramercy Pk S · New York, NY",
    price: 0,
    judges: [],
    presentors: [
      {
        profileImgUrl: "https://placehold.co/64?text=NAC",
        name: "National Arts Club",
        designation: "",
      },
    ],
    organizers: [
      {
        profileImgUrl: "https://placehold.co/100?text=TDF",
        name: "The Drawing Foundation",
      },
      {
        profileImgUrl: "https://placehold.co/100?text=DNY",
        name: "Drawing New York",
      },
    ],
    prizes:
      "Up to $1500 in cash and prizes will be awarded. Further details will be listed closer to the event date.",
    additionalInfo: [],
  },
  {
    id: 2,
    title: "Fiber Arts Showcase: Unleash Your Creativity",
    dateAndTime: "Thursday, April 17, 2025, 6:00 PM to 7:30 PM EDT",
    type: "Offline",
    tags: ["Art", "Yarn", "Creativity", "Fiber Arts", "Felting"],
    posterUrl: "https://placehold.co/400x300?text=Fiber+Arts+Showcase",
    description: `Join us for an afternoon of artistic exploration at the 
New York Fiber Arts Meetup Group's "Fiber Arts Showcase: 
Unleash Your Creativity." This event is a celebration of 
all things handmade, from felting to knitting to crochet 
and beyond. Bring your latest fiber arts creations to 
display and share with like-minded crafters. Our showcase 
will also feature live demonstrations and interactive 
workshops to inspire and ignite your passion for yarn and 
crafts. Whether you are a seasoned artisan or just starting 
out, this event is the perfect opportunity to connect with 
others in the fiber arts community and immerse yourself in 
a world of creativity and artistry. Don't miss out on this 
chance to experience the therapeutic power of felt therapy 
and the joy of handmade crafts.`,
    venue: "Upper Westside, Upper Westside · New York, NY",
    price: 0,
    judges: [],
    presentors: [],
    organizers: [
      {
        profileImgUrl: "https://placehold.co/100?text=Ingrid+Wright",
        name: "Ingrid Wright",
      },
    ],
    prizes: "",
    additionalInfo: [],
  },
  {
    id: 3,
    title: "Paint In Central Park (Bucket List Event)",
    dateAndTime:
      "Sunday, April 13, 2025 at 1:00 PM to Sunday, April 13, 2025 at 3:00 PM EDT.",
    type: "Offline",
    tags: ["Art", "Painting", "Illustration"],
    posterUrl: "https://placehold.co/400x300?text=Paint+At+Central+Park+",
    description: `*TO ATTEND GET TICKETS AT - 
https://dljparty.ticketleap.com/paint-in-the-park/dates/ 
(*Prepay Only Event. Need to purchase in advance. )

CELEBRATE SPRING WITH A PICNIC'N PAINT IN CENTRAL PARK. 
Come join us in a relaxed, creative and social setting. 
We will be painting in central park. No experience necessary!

Included: a pre-sketched canvas, unlimited painting materials 
(brushes, acrylic paints etc.) and a take home bag. No smocks 
so please dress appropriately. Please bring something to sit on.

What to expect:
\u2022 Step-by-step, group-oriented painting instruction, which is 
designed to simultaneously entertain and enlighten our members.
\u2022 We'll have a professional artist guide you through a 
featured painting that is yours to keep and proudly display. And 
don’t worry — no experience is necessary.
\u2022 2 hour course lead that teaches you the art of mixing 
colors, blending and painting techniques.
\u2022 All supplies provided - 12x16 pre-sketched canvas, unlimited 
acrylic paint (water based), brushes, and aprons.

DIRECTIONS TO FIND GROUP:
We are located in a cul-de-sac at PINETUM EAST. We will be behind 
this row of benches (right under the trees). If you are coming from 
the east side you can find us by entering Central Park on East 84th 
street. Walk up the ramp, cross over the road and head west. If you 
are traveling from the west side we are east of the basketball courts.

FAQs:
1. What if it rains? We will email attendees a rain date.
2. Can I still attend If I don't know how to paint? Yes, there's no 
experience necessary.
3. Can I come alone? Yes, about 80% come on their own.
4. Is this age specific? No, all are welcome.
5. Cost? $35-$45, price goes up as the event date gets closer. This event 
will sell out. Can't purchase at the door.`,
    venue: "East Pinetum, 86th St Transverse · New York, NY",
    price: 35,
    judges: [],
    presentors: [
      {
        profileImgUrl: "https://placehold.co/64?text=Lou",
        name: "Lou",
        designation: "",
      },
    ],
    organizers: [
      { profileImgUrl: "https://placehold.co/100?text=Lou", name: "Lou" },
    ],
    prizes: "",
    additionalInfo: [],
  },
  {
    id: 4,
    title: '"The Hunchback of Notre Dame" by Victor Hugo - Session 1 of 2',
    dateAndTime: "Monday, April 7, 2025, 12:30 AM to 2:00 AM IST",
    type: "Online",
    tags: [
      "Classic Books",
      "Literature",
      "Novel Reading",
      "Authors",
      "Writing",
    ],
    posterUrl: "https://placehold.co/400x300?text=Novel+Reading",
    description: `We will be reading Victor Hugo's novel, "The Hunchback of 
Notre Dame" in honor of the recent re-opening of this 
beautiful cathedral after the fire five years ago.

Hugo's novel fueled separate preservation efforts in the 
1800s.

Since this book is so long, we'll be discussing it in two 
parts. This is the first part.

Everyone will have a chance to share their thoughts on the 
book at the start of the meeting, which will be followed by 
an open discussion. I'll have a few questions prepared to 
keep the conversation going, which I'll try to post in the 
comments a week before we meet (although I don't always 
send them out on time).

We'll be meeting on a Zoom:
https://web.zoom.us/j/123456789546?pwd=12345

IMPORTANT: The passcode for the Zoom call is "classics".
To keep the group size small, there are a limited number of 
spots available. Please only RSVP if you intend to join.`,
    venue: "Online event. Link visible for attendees",
    price: 0,
    judges: [],
    presentors: [
      {
        profileImgUrl: "https://placehold.co/64?text=John+David+G",
        name: "John David G.",
        designation: "",
      },
    ],
    organizers: [],
    prizes: "",
    additionalInfo: [],
  },
  {
    id: 5,
    title:
      "A New World Begins: French Revolution by Jeremy D. Popkin | Book Club",
    dateAndTime: "Sunday, April 6, 2025, 1:30 AM to 3:30 AM IST",
    type: "Online",
    tags: [
      "Non Fiction Book Club",
      "Intellectual Discussions",
      "History",
      "French",
      "Society  ",
    ],
    posterUrl: "https://placehold.co/400x300?text=Book+Discussion",
    description: `Full Title: A New World Begins: The History of the 
French Revolution
Suggested by: Member
Pages to read: 542
ISBN: 9780465096664 (Originally listed edition)
9780465096671 (Edition Eugene is using)

Eugene's review of the book (Blog Link, Click Here)

Community Guidelines (Meetup Link, Click Here)

All Upcoming event (Meetup Link, Click Here)

Forthcoming Similar Events:
\u2022 Formation of a Movement: 04/12/2025 = The True 
Believer: Nature of Mass Movements by Eric Hoffer
\u2022 A Type Of Society: 04/19/2025 = The Republic by 
Plato
\u2022 Syria/Egypt: 05/03/2025 = Saladin: The Sultan Who 
Vanquished the Crusaders by John Man
\u2022 Modernizing the World: 05/17/2025 = The Swerve: 
How the World Became Modern by Stephen 
Greenblatt
\u2022 Effect on South America: 05/31/2025 = Bolivar: 
American Liberator by Marie Arana

Contribute:
The club has costs. If you appreciated the event, 
support the club. Contribute via:
Zelle, PayPal, or Venmo. 
Contribute to eugenefrominquiry@gmail.com.
GoFundMe: https://gofund.me/adabd41c

While reading the book, consider the below 
questions:
\u2022 What is the raison d’etre of the book?
\u2022 For what purpose did the author write 
the book?
\u2022 Why do people read this book?
\u2022 What are some limitations of the book?
\u2022 To whom would you suggest this book?
\u2022 What is the French Revolution?
\u2022 How to obtain liberty?
\u2022 What did the monarchy think of their 
status and the status of their subjects?
\u2022 What did it mean to have noble status?
\u2022 How was the marriage between Louis XVI 
and Marie-Antoinette different than previous 
French monarch marriages?
\u2022 What was the purpose of the network of 
intendants?
\u2022 What role did the theater have on society?
\u2022 How did the Jansenists effect politics?
\u2022 What were Turgot’s policies?
\u2022 Why did France want to help American 
independence?
\u2022 Who were the Notables?
\u2022 How did commoners effect political movements?
\u2022 Could France have become a constitutional 
monarchy?
\u2022 What is the Third Estate?
\u2022 What did the storming of the Bastille signify?
\u2022 What was the Great Fear?
\u2022 What had become known as the old regime 
(ancien régime)?
\u2022 What were the French Declaration of Rights?
\u2022 What happened to slavery during the French 
Revolution and after?
\u2022 What happened to religion during the era?
\u2022 What was the National Assembly?
\u2022 What happened to voting?
\u2022 How were the military feel about equality?
\u2022 Why did the royals flee during 1791?
\u2022 How did the Monarchy think of the public 
gaining power?
\u2022 Who were the Jacobin decisions?
\u2022 How were French colonies effected by the 
Revolution?
\u2022 How did women effect the Revolution?
\u2022 How were prisoners treated?
\u2022 How did the revolutionary calendar function?
\u2022 How did Napoleon influence the revolution?

Your questions are important and will take priority. 
If you have questions about the book's content or 
related ideas, either let me know what your 
questions are or raise them during the discussion.`,
    venue: "Online event. Link visible for attendees",
    price: 0,
    judges: [],
    presentors: [
      {
        profileImgUrl: "https://placehold.co/64?text=Eugene+K",
        name: "Eugene K.",
        designation: "",
      },
    ],
    organisers: [],
    prizes: "",
    additionalInfo: [],
  },
];

const App = () => {
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
                      to={`/events/${event.id}`}
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
