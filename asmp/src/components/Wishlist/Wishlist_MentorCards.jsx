import React, { useState } from "react";
import "./Wishlist_MentorCards.css";

const MentorCard = ({ mentor }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    console.log("Clicked!");
    setClicked((prevState) => !prevState);
  };  

  return (
    <div className="col-sm-3" style={{ margin: "1rem", height: "fit-content" }}>
      <div
        className="card"
        style={{
          backgroundColor: "#305234",
          borderRadius: "25px",
          borderColor: "#fff",
          maxWidth: "18rem",
          height: "100%",
          color: "#d9cdb3",
          padding: "1rem",
          fontFamily: "'Libre Bodoni', serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "5px solid white",
            borderRadius: "25px",
            boxSizing: "border-box",
            pointerEvents: "none", // Make sure overlay doesn't block clicks
          }}
        ></div>
        <div
          className="upper-card"
          style={{
            boxSizing: "border-box",
            borderRadius: "17px",
            backgroundColor: "#3b623f",
            margin: "-0.4rem",
            padding: "0.4rem",
          }}
        >
          <div
            className="card-header"
            style={{
              background: "none",
              color: "#D9CDB3",
              borderBottom: "none",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            {mentor.workprofile}
          </div>
          <div
            className="card-header"
            style={{
              background: "none",
              color: "#D9CDB3",
              borderBottom: "none",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "25px",
            }}
          >
            {mentor.company}
          </div>
        </div>
        <div
          className="card-body"
          style={{ overflowY: "auto", padding: "1rem" }}
        >
          <p
            className="card-text"
            style={{ textAlign: "left", color: "#D9CDB3" }}
          >
            Experience: {mentor.experience}
          </p>
          <p
            className="card-text"
            style={{ textAlign: "left", color: "#D9CDB3" }}
          >
            Graduation year: {mentor.graduation_year}
          </p>
        </div>
        <div
          className="add-to-wishlist"
          style={{
            backgroundColor: "#3b623f",
            color: "#D9CDB3",
            borderRadius: "17px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <p
            style={{
              marginBottom: 0,
              transition: "all 0.3s ease",
            }}
            onClick={handleClick}
          >
            Remove from Wishlist {clicked ? "\u2690" : "\u2691"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;