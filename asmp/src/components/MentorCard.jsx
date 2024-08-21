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
      await fetchMentors();
      const mentorInWishlist = mentors.some((item) => item.id === mentor.id);
      setIsInWishlist(mentorInWishlist);
    };
    checkWishlist();
  }, [mentor.id, fetchMentors]);

  return (
    <div style={{ margin: "1rem", height: "fit-content" }}>
      <div className="mentor-ke-card">
        <div className="mentor-first-div"></div>
        <div className="mentor-upper-card">
          <div className="mentor-id-div">
            Mentor ID: {mentor.id}
          </div>
          <div className="card-header">
            {mentor.designation}
          </div>
          <div className="card-header">
            {mentor.company_name}
          </div>
        </div>
        <div className="lower-card-body">
          <p className="card-text">
            Experience: {mentor.designation}
          </p>
          <p className="card-text">
            Graduation year: {mentor.year}
          </p>
        </div>
        <div className="add-to-wishlist">
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