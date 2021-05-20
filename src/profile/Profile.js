import React from "react";
import PropTypes from "prop-types";
// const noom = document.getElementsByClassName("nom");
const Profile = ({ fullName, bio, profession, children, alertme }) => {
  return (
    <div
      style={{
        border: "solid black 2px",
        width: "260px",
        height: "400px",
        boxShadow: " gray 3px 3px 30px 3px",
        borderRadius: "10px",
        backgroundColor: "#f7f7f7",
      }}
      className="card"
    >
      <p>{children}</p>
      <h6>
        Name:
        <i style={{ color: "red", fontFamily: "sans-serif" }} className="nom">
          {fullName}
        </i>
      </h6>
      <h6>
        Bio:<i style={{ color: "red", fontFamily: "sans-serif" }}> {bio}</i>
      </h6>
      <h6>
        Profession:
        <i style={{ color: "red", fontFamily: "sans-serif" }}> {profession}</i>
      </h6>
      <button
        onClick={() => alertme()}
        style={{
          backgroundColor: "black",
          color: "white",
          fontStyle: "oblique",
          borderRadius: "5px",
          border: "solid gray 1px",
          boxShadow: "blue 1px 1px 5px 1px",
        }}
      >
        click me
      </button>
    </div>
  );
};
Profile.defaultProps = {
  fullName: "Player name",
  bio: "Player Bio",
  profession: "Player Profession",
};
Profile.proTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;
