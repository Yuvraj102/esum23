import styles from "../style";
import { robot, calender } from "../assets";
import Button from "../components/Button";
import LottieFile from "./LottieFile";
import e_summit23_logo from "../assets/e-summit23.png";
import Trucklootie from "./Trucklootie";
import  './animations.css';
const Home = () => {
  return (
    <div
      className="zoomIn grid grid-cols-1 gap-4 place-content-center"
      style={{ marginBottom: 20, maxHeight: "60vh " }}
    >
      <img src={e_summit23_logo} />
    </div>
  );
};

export default Home;
