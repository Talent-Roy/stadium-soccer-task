import { useState, useEffect } from "react";
import axios from "axios";
import ProfileDetail from "../components/ProfileDetail";

const ProfileDetailsPage = ({ match }) => {
  const [player, setPlayer] = useState([]);
  const getProfile = async () => {
    try {
      const profiles = await axios.get(`/data/data.json`);

      const profile = profiles.data.find((el) => {
        return el.id === parseInt(match.params.id);
      });

      setPlayer(profile);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  });
  return <ProfileDetail player={player} />;
};

export default ProfileDetailsPage;
