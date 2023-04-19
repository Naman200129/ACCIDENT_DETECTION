import React, { useState, useEffect } from 'react';
import {BsFillArrowRightSquareFill} from "react-icons/bs";
import {FaBars} from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import{AiFillPicture, AiFillPlayCircle, AiFillHome} from "react-icons/ai";
//import {logo} from '../accidentlogo.ico';


// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     // Add event listener to close the menu when the user clicks outside of it
//     const handleOutsideClick = (event) => {
//       if (isOpen && !event.target.closest('.side-menu')) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('click', handleOutsideClick);
//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, [isOpen]);

//   const handleToggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="side-menu">
//       <button onClick={handleToggleMenu}>Toggle menu</button>
//       {isOpen && (
//         <nav>
//           <ul>
//             <li>Upload Image</li>
//             <li>Upload Video</li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// }

// export default Sidebar;

function Sidebar({children}) {

  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
   const menuItem = [
    {
      path:"/",
      name:"Home",
      icon:<AiFillHome/>
    },
    {
      path:"/Uploadimage",
      name:"Uploadimage",
      icon:<AiFillPicture/>
    },
    {
      path:"/Uploadvideo",
      name:"Uploadvideo",
      icon:<AiFillPlayCircle/>
    }
    

   ]

 

  return (
    <div className="container">
      <div style={{width: isOpen ? "300px": "50px"}} className="sidebar">
       <div className="topsection">
      
       <img src="https://pbs.twimg.com/media/D6W2a9FWsAAFwmE.jpg" style={{display: isOpen ? "block": "none"}} className="logo"></img>
       <div style={{marginLeft: isOpen ? "60px": "0px"}} className="bars">
           <FaBars onClick={toggle} />
         </div>
       </div>
       {
        menuItem.map((item, index) =>(
          <NavLink to={item.path} key={index} className="link" activeclassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{display: isOpen ? "block": "none"}} className="link_text">{item.name}</div>
          </NavLink>
        ))
       }

      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;