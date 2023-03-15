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
import Button from "./components/Button";

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
    <Button />
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Events />
        <CountDown />
        <AboutUs />
        {/* <Billing />
          <CardDeal /> */}
        {/* <Speakers /> */}
        <WhatWeProvide />

        {/* <Sponsors /> */}
        {/* <CTA /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
