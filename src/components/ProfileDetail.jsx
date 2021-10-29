import { Link } from "react-router-dom";
import styles from "../assets/styles/profile-detail.module.css";
import RaderChart from "./RaderChart";

const ProfileDetail = ({ player }) => {
  return (
    <>
      <div className={styles.details_page}>
        <div className={styles.header}>
          <div className={styles.nav}>
            <i class="fas fa-arrow-left"></i>
            <Link style={{ textDecoration: "none" }} to="/">
              <small> Home</small>
            </Link>
            <i class="fas fa-question"></i>
            <Link style={{ textDecoration: "none" }} to="/">
              <small>Help</small>
            </Link>
          </div>

          <div className={styles.name_n_img_box}>
            <p className={styles.player_name}>{player.Name}</p>
            <div className={styles.img_n_logo_box}>
              <div className={styles.img_box}>
                <img className={styles.image} src={player.Image} alt="" />
              </div>
              <img className={styles.club_logo} src={player.ClubLogo} alt="" />
            </div>
          </div>
          <div style={{ width: "250px" }}></div>
        </div>

        <main className={styles.main_section}>
          <div className={styles.polygon_stats}>
            <RaderChart player={player} />
          </div>
          <div className={styles.vertical_line}></div>
          <div className={styles.text_stats}>
            <div className={styles.text_stats_top}>
              <span>Overall {player.Overall} </span>
              <span>Position {player.Position}</span>
            </div>
            <p>
              Work Rate
              <b>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </b>
            </p>
            <p>
              Finishing <b> {player.Finishing}</b>
            </p>
            <p>
              Preferred foot <b> {player.PreferredFoot}</b>
            </p>
            <p>
              Short passing <b> {player.ShortPassing}</b>
            </p>
            <p>
              Crossing <b>{player.Crossing}</b>
            </p>
            <p>
              Volleys <b> {player.Volleys}</b>
            </p>
            <p>
              Heading Accuracy <b> {player.HeadingAccuracy}</b>
            </p>
            <p>
              Height <b> {player.Height} </b>
            </p>
            <p>
              Weight <b> {player.Weight}</b>{" "}
            </p>
            <p>
              Age <b>{player.Age}</b>{" "}
            </p>
            <p>
              Nationality <b>{player.Nationality}</b>
            </p>
            <p>
              Club <b> {player.Club}</b>{" "}
            </p>
            <p>
              Joined <b> {player.Joined}</b>
            </p>
            <p>
              Value <b> {player.Value}</b>
            </p>
            <p>
              Wage <b> {player.Wage}</b>
            </p>
            <p>
              Contract expires <b> {player.ContractValidUntil}</b>
            </p>
            <p>
              Jersey number <b> {player.JerseyNumber}</b>
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProfileDetail;
