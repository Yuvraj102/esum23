import styles from "./style";
import {
  // Billing,
  AboutUs,
  // CardDeal,
  // Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Speakers,
  Hero,
  Events,
  Sponsors,
  WhatWeProvide,
} from "./components";
import CountDown from "./components/CountDown";
import Home from "./components/Home";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Events />
        <AboutUs />
        {/* <Billing />
          <CardDeal /> */}
        {/* <Speakers /> */}
        <WhatWeProvide />

        <CountDown />
        {/* <Sponsors /> */}
        {/* <CTA /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
