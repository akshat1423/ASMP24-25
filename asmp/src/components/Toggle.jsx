import React, { useState,useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./Toggle.css";
import NonCoreConsult from "./NonCoreConsult";
import NonCoreFinance from "./NonCoreFinance";
import NonCoreSoftware from "./NonCoreSoftware";
import Core from "./Core";
import backgroundImage from "../assets/asmp_bg.jpeg";
import CursorAnimation from "./CursorAnimation";
import UseFetchMentors from "./hooks/useFetchMentors";
import UseAddToWishlist from "./hooks/useAddToWishlist";
import UseDeleteFromWishlist from "./hooks/useDeleteFromWishlist";
import Swal from "sweetalert2";
const Toggle = () => {
//   const [selectedOption, setSelectedOption] = useState("core");
//   const [activeTab, setActiveTab] = useState("consult");

//   // to toggle between core and non-core
//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   // to toggle between different options in the non-core div
//   const handleTabClick = (tab, event) => {
//     event.preventDefault();
//     setActiveTab(tab);
//   };

const FIELDS = [
  ['core', 'Core '],
  ['finance', 'Finance'],
  ['analytics', 'Analytics '],
  ['consult', 'Consult'],
  ['software','Software'],

]

const [currField, setCurrField] = useState(FIELDS[0][0]);

const { fetchMentors, setError, loading, error, mentors, setMentors } = UseFetchMentors();
const { addMentor, success } = UseAddToWishlist();
const { deleteMentor } = UseDeleteFromWishlist();

// useEffect(() => {
//   const cards = document.querySelectorAll(".card");

//   setTimeout(() => {
//     cards.forEach(card => card.classList.add("show"));
//   }, 200); // Adjust the delay based on your preference
// }, []);

function fetchMentorsByField(field) {
  setMentors(null);
  fetchMentors(field);
  setCurrField(field);
}


useEffect(() => {
  fetchMentors(FIELDS[0][0]);
}, [])

const x = useMotionValue(0);
const y = useMotionValue(0);
const rotateX = useTransform(y, [-100, 100], [30, -30]);
const rotateY = useTransform(x, [-100, 100], [-30, 30]);


function addToWishlist(id) {
  addMentor(id);
  const newMentors = [...mentors];
  let something = newMentors.filter((mentor) => mentor.id == id)[0];
  something.wishlisted = true;
  setMentors(newMentors);
  fetchMentors(currField);
}



async function deleteFromWishlist (id) {

  Swal.fire({
    title: 'Are you sure?',
    text: "You want to remove this mentor from wishlist",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then(async (result) => {
    if (result.isConfirmed) {
      await deleteMentor(id);
      const newMentors = [...mentors];
      let something = newMentors.filter((mentor) => mentor.id == id)[0];
      something.wishlisted = false;
      setMentors(newMentors);
      fetchMentors(currField);
      Swal.fire(
        'Removed!',
        'Mentor has been removed from wishlist.',
        'success'
      )
    }
  })
}



if (loading || !mentors) {
  return <>
    <div className="mentorbtncontainer">
      {FIELDS.map((field, index) => {
        return <button className="mentorbutton" style={{ backgroundColor: currField == field[0] ? "orange" : "#3498db" }} key={index} onClick={() => {
          fetchMentorsByField(field[0])
        }}>{field[1]}</button>
      })}
    </div>
    <div className="loader-container">
      <div className="loader"></div>
    </div></>
}


  return (
    
        <div
          style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "110vh",
          zIndex: -1,
        }}
      >
        <div style={{ height: "10vh" }}></div>
        <div className="core-or-noncore-container">
          <div className="switches-container">
            <input
              type="radio"
              id="core"
              name="coreOrNonCore"
              value="core"
              checked={selectedOption === "core"}
              onChange={handleOptionChange}
            />
            <label htmlFor="core">Core</label>

            <input
              type="radio"
              id="noncore"
              name="coreOrNonCore"
              value="noncore"
              checked={selectedOption === "noncore"}
              onChange={handleOptionChange}
            />
            <label htmlFor="noncore">Non Core</label>

            <div className="switch-wrapper">
              <div className="switch">
                <div>Core</div>
                <div>Non Core</div>
              </div>
            </div>
          </div>
        </div>

        {/* Conditionally rendering coreDiv and noncoreDiv */}
        {selectedOption === "core" && (
          <div id="coreDiv">
            <Core />
          </div>
        )}

        {selectedOption === "noncore" && (
          <div id="noncoreDiv">
            {/* Non-core tabs*/}
            <ul className="toggle-ul-noncore">
              <li className="toggle-li-noncore">
                <a
                  className={`toggle-li-link-noncore ${
                    activeTab === "consult" ? "active" : ""
                  }`}
                  href="#consult"
                  onClick={(e) => handleTabClick("consult", e)}
                >
                  Consult
                </a>
              </li>
              <li className="toggle-li-noncore">
                <a
                  className={`toggle-li-link-noncore ${
                    activeTab === "analytics" ? "active" : ""
                  }`}
                  href="#analytics"
                  onClick={(e) => handleTabClick("analytics", e)}
                >
                  Analytics
                </a>
              </li>
              <li className="toggle-li-noncore">
                <a
                  className={`toggle-li-link-noncore ${
                    activeTab === "finance" ? "active" : ""
                  }`}
                  href="#finance"
                  onClick={(e) => handleTabClick("finance", e)}
                >
                  Finance
                </a>
              </li>
              <li className="toggle-li-noncore">
                <a
                  className={`toggle-li-link-noncore ${
                    activeTab === "software" ? "active" : ""
                  }`}
                  href="#software"
                  onClick={(e) => handleTabClick("software", e)}
                >
                  IT/Software
                </a>
              </li>
              <li className="toggle-li-noncore">
                <a
                  className={`toggle-li-link-noncore ${
                    activeTab === "others" ? "active" : ""
                  }`}
                  href="#others"
                  onClick={(e) => handleTabClick("others", e)}
                >
                  Product Management
                </a>
              </li>
            </ul>

            {activeTab === "consult" && <NonCoreConsult />}
            {activeTab === "finance" && <NonCoreFinance />}
            {activeTab === "software" && <NonCoreSoftware />}
          </div>
        )}
      </div>
  
  );
};

export default Toggle;
