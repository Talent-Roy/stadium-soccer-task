import Profiles from "../components/Profiles";
import styles from "../assets/styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Profiles />
    </div>
  );
};

export default Home;
