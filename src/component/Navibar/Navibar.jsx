import React, { useState, useEffect, useRef } from "react";
import "./Navibar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close
import Logout from "../../component/Logout/Logout";

const Navibar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close any open dropdown when toggling the menu
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null); // Close if the same dropdown is clicked
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Function to close the mobile menu after clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null); // Also close any open dropdown
  };

  // Function to handle clicks outside of the menu
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="Navibar" ref={navRef}>
      <div className="NavibarContainer">
        <div className="MobileIcon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`NaviItems ${isMobileMenuOpen ? "NavItemsMobile" : ""}`}>
          <li className="NaviItem">
            <div onClick={() => toggleDropdown("college")}>Shop by College</div>
            <ul
              className={`NaviDropdownMenu ${
                activeDropdown === "college" ? "show" : ""
              }`}
            >
              <li>
                <Link to="/college/colpas" onClick={closeMobileMenu}>
                  COLPAS
                </Link>
              </li>
              <li>
                <Link to="/college/colnas" onClick={closeMobileMenu}>
                  COLNAS
                </Link>
              </li>
              <li>
                <Link to="/college/colmas" onClick={closeMobileMenu}>
                  COLMAS
                </Link>
              </li>
              <li>
                <Link to="/college/caerse" onClick={closeMobileMenu}>
                  CAERSE
                </Link>
              </li>
              <li>
                <Link to="/college/casap" onClick={closeMobileMenu}>
                  CASAP
                </Link>
              </li>
              <li>
                <Link to="/college/cafst" onClick={closeMobileMenu}>
                  CAFST
                </Link>
              </li>
              <li>
                <Link to="/college/ccss" onClick={closeMobileMenu}>
                  CCSS
                </Link>
              </li>
              <li>
                <Link to="/college/coed" onClick={closeMobileMenu}>
                  COED
                </Link>
              </li>
              <li>
                <Link to="/college/ceet" onClick={closeMobileMenu}>
                  CEET
                </Link>
              </li>
              <li>
                <Link to="/college/cnrem" onClick={closeMobileMenu}>
                  CNREM
                </Link>
              </li>
              <li>
                <Link to="/college/cvm" onClick={closeMobileMenu}>
                  CVM
                </Link>
              </li>
              <li>
                <Link to="/college/sgs" onClick={closeMobileMenu}>
                  SGS
                </Link>
              </li>
            </ul>
          </li>
          <li className="NaviItem">
            <div onClick={() => toggleDropdown("department")}>
              Shop by Department
            </div>
            <ul
              className={`NaviDropdownMenu ${
                activeDropdown === "department" ? "show" : ""
              }`}
            >
              <li>
                <Link
                  to="/department/computer-science"
                  onClick={closeMobileMenu}
                >
                  Computer Science
                </Link>
              </li>
              <li>
                <Link to="/department/chemistry" onClick={closeMobileMenu}>
                  Chemistry
                </Link>
              </li>
              <li>
                <Link to="/department/geology" onClick={closeMobileMenu}>
                  Geology
                </Link>
              </li>
              <li>
                <Link to="/department/mathematics" onClick={closeMobileMenu}>
                  Mathematics
                </Link>
              </li>
              <li>
                <Link to="/department/physics" onClick={closeMobileMenu}>
                  Physics
                </Link>
              </li>
              <li>
                <Link to="/department/statistics" onClick={closeMobileMenu}>
                  Statistics
                </Link>
              </li>
              <li>
                <Link to="/department/biochemistry" onClick={closeMobileMenu}>
                  BioChemistry
                </Link>
              </li>
              <li>
                <Link to="/department/microbiology" onClick={closeMobileMenu}>
                  MicroBiology
                </Link>
              </li>
              <li>
                <Link to="/department/plantscience" onClick={closeMobileMenu}>
                  Plant Science & BioTechnology
                </Link>
              </li>
              <li>
                <Link
                  to="/department/industrial-relations"
                  onClick={closeMobileMenu}
                >
                  Industrial Relations & Personal Management
                </Link>
              </li>
              <li>
                <Link to="/department/human-resource" onClick={closeMobileMenu}>
                  Human Resource Management
                </Link>
              </li>
              <li>
                <Link to="/department/agribusiness" onClick={closeMobileMenu}>
                  Agribusiness & Management
                </Link>
              </li>
              <li>
                <Link to="/department/agrieconomics" onClick={closeMobileMenu}>
                  Agricultural Economics
                </Link>
              </li>
              <li>
                <Link to="/department/agricextension" onClick={closeMobileMenu}>
                  Agricultural Extension & Rural Sociology
                </Link>
              </li>
              <li>
                <Link to="/department/animalbreeding" onClick={closeMobileMenu}>
                  Animal Breeding & Physiology
                </Link>
              </li>
              <li>
                <Link
                  to="/department/animalnutrition"
                  onClick={closeMobileMenu}
                >
                  Animal Nutrition & Forage Science
                </Link>
              </li>
              <li>
                <Link
                  to="/department/animalproduction"
                  onClick={closeMobileMenu}
                >
                  Animal Production & Livestock Management
                </Link>
              </li>
            </ul>
          </li>
          <li className="NaviItem">
            <div onClick={() => toggleDropdown("level")}>Shop by Level</div>
            <ul
              className={`NaviDropdownMenu ${
                activeDropdown === "level" ? "show" : ""
              }`}
            >
              <li>
                <Link to="/level/100" onClick={closeMobileMenu}>
                  100 Level
                </Link>
              </li>
              <li>
                <Link to="/level/200" onClick={closeMobileMenu}>
                  200 Level
                </Link>
              </li>
              <li>
                <Link to="/level/300" onClick={closeMobileMenu}>
                  300 Level
                </Link>
              </li>
              <li>
                <Link to="/level/400" onClick={closeMobileMenu}>
                  400 Level
                </Link>
              </li>
              <li>
                <Link to="/level/500" onClick={closeMobileMenu}>
                  500 Level
                </Link>
              </li>
            </ul>
          </li>
          <li className="NaviItem">
            <div onClick={() => toggleDropdown("materials")}>
              Digital Materials
            </div>
            <ul
              className={`NaviDropdownMenu ${
                activeDropdown === "materials" ? "show" : ""
              }`}
            >
              <li>
                <Link to="/materials/past-questions" onClick={closeMobileMenu}>
                  Past Questions
                </Link>
              </li>
              <li>
                <Link to="/materials/term-paper" onClick={closeMobileMenu}>
                  Term Paper
                </Link>
              </li>
              <li>
                <Link to="/materials/seminar-work" onClick={closeMobileMenu}>
                  Seminar Work
                </Link>
              </li>
              <li>
                <Link to="/level/project-research" onClick={closeMobileMenu}>
                  Project Research
                </Link>
              </li>
            </ul>
          </li>
          {/* <li className="NaviItem">
            <Link
              id="digitalmateriallink"
              to="/digital-material"
              onClick={closeMobileMenu}
            >
              Shop Digital Material
            </Link>
          </li> */}
          <Logout />
        </ul>
      </div>
    </div>
  );
};

export default Navibar;
