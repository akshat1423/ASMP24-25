// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { Spin as Hamburger } from "hamburger-react";
// import logo from '../../assets/images/Sarc.png';
// import {
//   NavbarContainer,
//   LeftContainer,
//   MiddleContainer,
//   RightContainer,
//   NavbarInnerContainer,
//   MiddleInnerContainer,
//   NavbarExtendedContainer,
// } from "./navbar.style";


// export default function Navbar(params) {
//   const [selectedItem, setSelectedItem] = useState(null); // State to track selected item
//   const [isOpen, setOpen] = useState(false); // State to track hamburger menu open/close

//   const navigationItems = [
//     { name: "Sneak Peeks", to: "sneakPeeks", className: "sneakPeeks", id: "sneakPeeks" },
//     { name: "Events", to: "events", className: "events", id: "events" },
//     { name: "Testimonial", to: "testimonials", className: "testimonials", id: "testimonials" },
//     { name: "FAQ", to: "faq", className: "faq", id: "faq" },
//     { name: "Team", to: "team", className: "team", id: "team" },
//     { name: "Wishlist", to: "wishlist", className: "wishlist", id: "wishlist" },

//   ];

//   const handleClick = (name) => {
//     setSelectedItem(name);
//     // console.log(name);
//   };

//   return (
//     <>
//     <NavbarContainer>
//       <NavbarInnerContainer>
//         <LeftContainer>
//           <img src={logo} alt="Logo" style={{objectFit:'100% 100%'}}/>
//         </LeftContainer>
//         <MiddleContainer>
//           <MiddleInnerContainer>
//             {navigationItems.map((item) => (
//               <li
//                 key={item.name}
//                 className={`${item.className} ${
//                   selectedItem === item.className ? "selected" : ""
//                 }`}
//                 onClick={() => handleClick(item.className)}
//                 id={item.id}
//                 style={{ cursor: "pointer" }}
//               >
//                 <Link
//                   to={item.to}
//                   smooth={true}
//                   duration={500}
//                   onClick={() => handleClick(item.className)}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </MiddleInnerContainer>
//         </MiddleContainer>
//         <RightContainer style={{zIndex:'10000'}}>
//           <Hamburger toggled={isOpen} toggle={setOpen} size={35} />
//         </RightContainer>
//       </NavbarInnerContainer>

//       {isOpen && (
//         <NavbarExtendedContainer>
//           {navigationItems.map((item) => (
//             <li
//               key={item.name}
//               className={`${item.className} ${
//                 selectedItem === item.name ? "selected" : ""
//               }`}
//               onClick={() => handleClick(item.className)}
//               id={item.id}
//               style={{ cursor: "pointer" }}
//             >
//               <Link
//                 to={item.to}
//                 smooth={true}
//                 duration={500}
//                 onClick={() => {
//                   handleClick(item.className);
//                   setOpen(false); // Close the menu after click
//                 }}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </NavbarExtendedContainer>
//       )}
//     </NavbarContainer>
    
//     </>
//   );
// }

import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import logo from '../../assets/images/Sarc.png';
import {
  NavbarContainer,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  NavbarInnerContainer,
  MiddleInnerContainer,
  NavbarExtendedContainer,
} from "./navbar.style";

export default function Navbar() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const navigationItems = [
    { name: "Sneak Peeks", to: "sneakPeeks", className: "sneakPeeks", id: "sneakPeeks" },
    { name: "Events", to: "events", className: "events", id: "events" },
    { name: "Testimonial", to: "testimonials", className: "testimonials", id: "testimonials" }, 
    { name: "FAQ", to: "faq", className: "faq", id: "faq" },
    { name: "Team", to: "team", className: "team", id: "team" },
    { name: "Wishlist", to: "wishlist", className: "wishlist", id: "wishlist" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      element.scrollTo({ behavior: 'smooth' });
      setSelectedItem(id);
    }
  };

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <img src={logo} alt="Logo" style={{ objectFit: '100% 100%' }} />
        </LeftContainer>
        <MiddleContainer>
          <MiddleInnerContainer>
            {navigationItems.map((item) => (
              <li
                key={item.name}
                className={`${item.className} ${selectedItem === item.className ? "selected" : ""}`}
                onClick={() => handleScroll(item.to)}
                id={item.id}
                style={{ cursor: "pointer" }}
              >
                {item.name}
              </li>
            ))}
          </MiddleInnerContainer>
        </MiddleContainer>
        <RightContainer style={{ zIndex: '10000' }}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={35} />
        </RightContainer>
      </NavbarInnerContainer>

      {isOpen && (
        <NavbarExtendedContainer>
          {navigationItems.map((item) => (
            <li
              key={item.name}
              className={`${item.className} ${selectedItem === item.className ? "selected" : ""}`}
              onClick={() => {
                handleScroll(item.to);
                setOpen(false); // Close the menu after click
              }}
              id={item.id}
              style={{ cursor: "pointer" }}
            >
              {item.name}
            </li>
          ))}
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}


