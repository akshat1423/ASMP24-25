import React, { useState, useEffect } from "react";
import "./MentorCard.css";
import Swal from "sweetalert2";
import UseAddToWishlist from "../hooks/useAddToWishlist";
import UseFetchWishlist from "../hooks/useFetchWishlist";

const MentorCard = ({ mentor }) => {
  const [clicked, setClicked] = useState(false);
  const { addMentor } = UseAddToWishlist();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { fetchMentors, mentors } = UseFetchWishlist();

  const handleClick = async () => {
    if (!isInWishlist) {
      setClicked((prevState) => !prevState);
      await addToWishlist(mentor.id);
      setIsInWishlist(true);
    }
  };

  async function addToWishlist(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to add this mentor to the wishlist",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await addMentor(id);
        Swal.fire("Added!", "Mentor has been added to wishlist.", "success");
      }
    });
  }

  useEffect(() => {
    const checkWishlist = async () => {
      await fetchMentors(); // Make sure this fetches the latest wishlist
      const mentorInWishlist = mentors.some((item) => item.id === mentor.id);
      setIsInWishlist(mentorInWishlist);
    };
    checkWishlist();
  }, [mentor.id, fetchMentors]);
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
            pointerEvents: "none",
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
            {mentor.work_profile}
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
            {mentor.company_name}
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
            Experience: {mentor.designation}
          </p>
          <p
            className="card-text"
            style={{ textAlign: "left", color: "#D9CDB3" }}
          >
            Graduation year: {mentor.year}
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
            Add to Wishlist {isInWishlist ? "\u2691" : "\u2690"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;