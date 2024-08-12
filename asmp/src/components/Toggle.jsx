import React, { useState } from "react";
import "./Toggle.css";
import NonCoreManagement_consult from "./non-corefiles/NonCoreManagement-consult";
import NonCoreFinance from "./non-corefiles/NonCoreFinance";
import NonCoreSoftware from "./non-corefiles/NonCoreSoftware";
import Core from "./Core";
import Research from "./research";
import Civil_services from "./non-corefiles/civil_services";
import Management from "./non-corefiles/management";
import Product_management from "./non-corefiles/product_management";
import Strategy_consulting from "./non-corefiles/strategy_consulting";
import Design from "./non-corefiles/design";
import Marketing from "./non-corefiles/marketing";
import Entrepreneurship from "./non-corefiles/entrepreneurship";
import backgroundImage from "../assets/asmp_bg.jpeg";
import CursorAnimation from "./CursorAnimation";

const Toggle = () => {
  const [selectedOption, setSelectedOption] = useState("core");
  const [activeTab, setActiveTab] = useState("consult");

  // to toggle between core and non-core
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // to toggle between different options in the non-core div
  const handleTabClick = (tab, event) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  const nonCoreTabs = [
    { id: "analytics", label: "Analytics" },
    { id: "civil-service", label: "Civil Services/Government of India" },
    { id: "management-consult", label: "Management Consulting", href: "#consult" },
    { id: "strategy-consult", label: "Stratergy Consulting", href: "#consult" },
    { id: "finance", label: "Finance" ,href:"#finance"},
    { id: "software", label: "IT/Software" ,href:"#software"},
    { id: "others", label: "Others" ,href:"#others"},
    { id: "product-management", label: "Product Management", href: "#others" },
    {id:"design",label:"Design",href:"#design"},
    {id:"management",label:"Management",href:"#management"},
    {id:"marketing",label:"Marketing",href:"#marketing"},
    {id:"entrepreneurship",label:"Entrepreneurship",href:"#entrepreneurship"},
  ];

  const coreTabs = [
    {id:"core-engineering",label:"Core Engineering",href:"#core-engineering"},
    {id:"research",label:"Research",href:"#research"},
  ]

  return (
    <>
      <CursorAnimation />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height:'400vh',

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
            <ul className="toggle-ul-core">
              {coreTabs.map(({ id, label, href = `#${id}` }) => (
                <li key={id} className="toggle-li-core">
                  <a className={`toggle-li-link-core ${
                      activeTab === id ? "active" : ""
                    }`} href={href}  onClick={(e) => handleTabClick(id, e)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            {activeTab === "core-engineering" && <Core />}
            {activeTab === "research" && <Research />}
          </div>
        )}

        {selectedOption === "noncore" && (
          <div id="noncoreDiv">
            {/* Non-core tabs*/}
            <ul className="toggle-ul-noncore">
              {nonCoreTabs.map(({ id, label, href = `#${id}` }) => (
                <li key={id} className="toggle-li-noncore">
                  <a
                    className={`toggle-li-link-noncore ${
                      activeTab === id ? "active" : ""
                    }`}
                    href={href}
                    onClick={(e) => handleTabClick(id, e)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            {activeTab === "analytics" && <NonCoreManagement_consult />}
            {activeTab === "civil-service" && <Civil_services/>}
            {activeTab === "management-consult" && <NonCoreManagement_consult />}
            {activeTab === "strategy-consult" && <Strategy_consulting />}
            {activeTab === "finance" && <NonCoreFinance />}
            {activeTab === "software" && <NonCoreSoftware />}
            {activeTab === "others" && <Other/>}
            {activeTab === "product-management" && <Product_management/>}
            {activeTab === "design" && <Design/>}
            {activeTab === "management" && <Management />}
            {activeTab === "marketing" && <Marketing />}
            {activeTab === "entrepreneurship" && <Entrepreneurship/>}
          </div>
        )}
      </div>
    </>
  );
};

export default Toggle;
