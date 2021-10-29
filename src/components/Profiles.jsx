import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../assets/styles/profiles.module.css";
import logo from "../assets/fifa_game_logo.png";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const getProfiles = async () => {
    try {
      const players = await axios.get("data/data.json");
      setProfiles(players.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfiles();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.searchbar}>
          <form action="">
            <input
              type="text"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <button type="submit">
              <i className="fas fa-search"></i> search
            </button>
          </form>
        </div>
      </div>
      <div className={styles.profiles}>
        {profiles
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.Name.toLocaleLowerCase().includes(
                searchTerm.toLocaleLowerCase()
              )
            ) {
              return val;
            } else if (
              val.Club.toLocaleLowerCase().includes(
                searchTerm.toLocaleLowerCase()
              )
            ) {
              return val;
            } else if (
              val.Nationality.toLocaleLowerCase().includes(
                searchTerm.toLocaleLowerCase()
              )
            ) {
              return val;
            }
            return true;
          })
          .map((profile) => {
            return (
              <>
                <Link to={`/profile/${profile.id}`} className={styles.link}>
                  <div className={styles.profile_cards} key={profile.id}>
                    <div className={styles.profile_card_top}>
                      <img src={profile.JerseyImage} alt="..." />
                      <p className={styles.profile_name}>{profile.Name}</p>
                    </div>
                    <p>
                      <strong>Nationality: </strong> {profile.Nationality}
                    </p>
                    <p>
                      <strong>Club: </strong> {profile.Club}
                    </p>
                    <p>
                      <strong>Age: </strong> {profile.Age}
                    </p>
                  </div>
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Profiles;
