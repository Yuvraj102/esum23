import { events, footerLinks } from "../constants";
import styles from "../style";
import EventCard from "./EventCard";

const Events = () => (
  <section
    id="events"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>E-Summit’23 Events.</h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          E-Summit’23 will present rays of hope so dazzling that they penetrate
          event the darkness that veils our eyes.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {events.map((card, index) => (
        <EventCard
          key={card.id}
          {...card}
          eid={footerLinks[1]?.links[index]?.eid}
        />
      ))}
    </div>
  </section>
);

export default Events;
