import React, { useState } from "react";
import "./Toggle.css";
import NonCoreConsult from "./NonCoreConsult";
import NonCoreFinance from "./NonCoreFinance";
import NonCoreSoftware from "./NonCoreSoftware";
import Core from "./Core";
import backgroundImage from '../assets/asmp_bg.jpeg';
import CursorAnimation from "./CursorAnimation";

const Toggle = () => {
  const [selectedOption, setSelectedOption] = useState("core");
  const [activeTab, setActiveTab] = useState("consult");

  // to toggle between core and non-core
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  // to toggle between different options in the non-core div
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <CursorAnimation />
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        zIndex: -1,
    }}>
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
            <ul className="toggle-ul">
              <li className="toggle-li">
                <a
                  className={`toggle-li-link ${activeTab === "consult" ? "active" : ""}`}
                  href="#consult"
                  onClick={() => handleTabClick("consult")}
                >
                  Consult
                </a>
              </li>
              <li className="toggle-li">
                <a
                  className={`toggle-li-link ${activeTab === "analytics" ? "active" : ""}`}
                  href="#analytics"
                  onClick={() => handleTabClick("analytics")}
                >
                  Analytics
                </a>
              </li>
              <li className="toggle-li">
                <a
                  className={`toggle-li-link ${activeTab === "finance" ? "active" : ""}`}
                  href="#finance"
                  onClick={() => handleTabClick("finance")}
                >
                  Finance
                </a>
              </li>
              <li className="toggle-li">
                <a
                  className={`toggle-li-link ${activeTab === "software" ? "active" : ""}`}
                  href="#software"
                  onClick={() => handleTabClick("software")}
                >
                  IT/Software
                </a>
              </li>
              <li className="toggle-li">
                <a
                  className={`toggle-li-link ${activeTab === "others" ? "active" : ""}`}
                  href="#others"
                  onClick={() => handleTabClick("others")}
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
    </>
  );
};

export default Toggle;