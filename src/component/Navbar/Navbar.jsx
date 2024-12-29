import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <section className="NavbarContainer">
        <ul className="NavItems">
          <li className="NavItem">
            <Link to="#">Shop by College</Link>
            <ul className="DropdownMenu">
              <li>
                <Link to="/college/colpas">COLPAS</Link>
              </li>
              <li>
                <Link to="/college/colnas">COLNAS</Link>
              </li>
              <li>
                <Link to="/college/colmas">COLMAS</Link>
              </li>
              <li>
                <Link to="/college/caerse">CAERSE</Link>
              </li>
              <li>
                <Link to="/college/casap">CASAP</Link>
              </li>{" "}
              <li>
                <Link to="/college/cafst">CAFST</Link>
              </li>{" "}
              <li>
                <Link to="/college/ccss">CCSS</Link>
              </li>{" "}
              <li>
                <Link to="/college/coed">COED</Link>
              </li>{" "}
              <li>
                <Link to="/college/ceet">CEET</Link>
              </li>{" "}
              <li>
                <Link to="/college/cnrem">CNREM</Link>
              </li>{" "}
              <li>
                <Link to="/college/cvm">CVM</Link>
              </li>{" "}
              <li>
                <Link to="/college/sgs">SGS</Link>
              </li>
            </ul>
          </li>
          <li className="NavItem">
            <Link to="#">Shop by Department</Link>
            <ul className="DropdownMenu">
              <li>
                <Link to="/department/computer-science">Computer Science</Link>
              </li>
              <li>
                <Link to="/department/chemisty">Chemstry</Link>
              </li>
              <li>
                <Link to="/department/geology">Geology</Link>
              </li>
              <li>
                <Link to="/department/mathematics">Mathematics</Link>
              </li>
              <li>
                <Link to="/department/physics">Physics</Link>
              </li>
              <li>
                <Link to="/department/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/department/biochemistry">BioChemistry</Link>
              </li>
              <li>
                <Link to="/department/microbiology">MicroBiology</Link>
              </li>
              <li>
                <Link to="/department/plantscience">
                  Plant Science & BioTechnology
                </Link>
              </li>
              <li>
                <Link to="/department/industrial-relations">
                  Industrial Relations & Personal Management
                </Link>
              </li>
              <li>
                <Link to="/department/human-resource">
                  Human Resource Management
                </Link>
              </li>
              <li>
                <Link to="/department/agribusiness">
                  Agribusiness & Management
                </Link>
              </li>
              <li>
                <Link to="/department/agrieconomics">
                  Agricultural Economics
                </Link>
              </li>
              <li>
                <Link to="/department/agricextension">
                  Agricultural Extension & Rural Sociology
                </Link>
              </li>
              <li>
                <Link to="/department/animalbreeding">
                  Animal Breeding & Physiology
                </Link>
              </li>
              <li>
                <Link to="/department/animalnutrition">
                  Animal Nutrition & Forage Science
                </Link>
              </li>
              <li>
                <Link to="/department/animalproduction">
                  Animal Production & Livestock Management
                </Link>
              </li>
              <li>
                <Link to="/department/human-nutrition">
                  Human Nutrition and Dietetics
                </Link>
              </li>
              <li>
                <Link to="/department/home-science">
                  Home Science/Hospitality Management & Tourism
                </Link>
              </li>
              <li>
                <Link to="/department/foodscience">
                  Food Science and Technology
                </Link>
              </li>
              <li>
                <Link to="/department/agronomy">Agronomy</Link>
              </li>
              <li>
                <Link to="/department/planthealth">
                  Plant Health Management
                </Link>
              </li>
              <li>
                <Link to="/department/soil-science">
                  Soil Science and Meteorology
                </Link>
              </li>
              <li>
                <Link to="/department/water-resources">
                  Water Resources Management and Agrometeorology
                </Link>
              </li>
              <li>
                <Link to="/department/adult-education">
                  Adult and Continuing Education
                </Link>
              </li>
              <li>
                <Link to="/department/agric-education">
                  Agricultural/Home Science Education
                </Link>
              </li>
              <li>
                <Link to="/department/business-education">
                  Business Education
                </Link>
              </li>
              <li>
                <Link to="/department/economic-education">
                  Economics Education
                </Link>
              </li>
              <li>
                <Link to="/department/education-management">
                  Education Management
                </Link>
              </li>
              <li>
                <Link to="/department/it-education">
                  Industrial Technology Education
                </Link>
              </li>
              <li>
                <Link to="/department/library-science">
                  Library and Information Science
                </Link>
              </li>
              <li>
                <Link to="/department/guidance">Guidance and Counselling</Link>
              </li>
              <li>
                <Link to="/department/integrated-education">
                  Integrated Science Education
                </Link>
              </li>
              <li>
                <Link to="/department/abe">
                  Agricultural and Bioresources Engineering
                </Link>
              </li>
              <li>
                <Link to="/department/ci-e">Civil Engineering</Link>
              </li>
              <li>
                <Link to="/department/ch-e">Chemical Engineering</Link>
              </li>
              <li>
                <Link to="/department/eee">
                  Electrical and Electronics Engineering
                </Link>
              </li>
              <li>
                <Link to="/department/me-e">Mechanical Engineering</Link>
              </li>
              <li>
                <Link to="/department/emt">
                  Environment Management and Toxicology
                </Link>
              </li>
              <li>
                <Link to="/department/farm">
                  Fisheries and Aquatic Resources Management
                </Link>
              </li>
              <li>
                <Link to="/department/fem">
                  Forestry and Environmental Management
                </Link>
              </li>
              <li>
                <Link to="/department/theriogenology">Theriogenology</Link>
              </li>{" "}
              <li>
                <Link to="/department/veterinary-anatomy">
                  Veterinary Anatomy
                </Link>
              </li>{" "}
              <li>
                <Link to="/department/veterinary-medicine">
                  Veterinary Medicine
                </Link>
              </li>{" "}
              <li>
                <Link to="/department/veterinary-microbiology">
                  Veterinary Microbiology
                </Link>
              </li>{" "}
              <li>
                <Link to="/department/veterinary-phpm">
                  Veterinary Public Health and Preventive Medicine
                </Link>
              </li>{" "}
              <li>
                <Link to="/department/veterinary-sr">
                  Veterinary Surgery and Radiology
                </Link>
              </li>{" "}
              <li>
                <Link to="/department/english">English</Link>
              </li>{" "}
              <li>
                <Link to="/department/french">French</Link>
              </li>{" "}
              <li>
                <Link to="/department/german">German</Link>
              </li>{" "}
              <li>
                <Link to="/department/history">History</Link>
              </li>{" "}
              <li>
                <Link to="/department/social-science">Social Science</Link>
              </li>{" "}
              <li>
                <Link to="/department/physical-and-health">
                  Physical and Health
                </Link>
              </li>{" "}
              <li>
                <Link to="/department/philosophy">Philosophy</Link>
              </li>{" "}
              <li>
                <Link to="/department/peace-and-conflict">
                  Peace and Conflict
                </Link>
              </li>{" "}
            </ul>
          </li>
          <li className="NavItem">
            <Link to="#">Shop by Level</Link>
            <ul className="DropdownMenu">
              <li>
                <Link to="/level/100">100 Level</Link>
              </li>
              <li>
                <Link to="/level/200">200 Level</Link>
              </li>
              <li>
                <Link to="/level/300">300 Level</Link>
              </li>
              <li>
                <Link to="/level/400">400 Level</Link>
              </li>
              <li>
                <Link to="/level/500">500 Level</Link>
              </li>{" "}
              <li>
                <Link to="/level/600">600 Level</Link>
              </li>{" "}
              <li>
                <Link to="/level/phd">PhD</Link>
              </li>
              <li>
                <Link to="/level/msc">MSc</Link>
              </li>
            </ul>
          </li>
          <li className="NavItem">
            <Link to="#">Digital Materials</Link>
            <ul className="DropdownMenu">
              <li>
                <Link to="/materials/past-question">Past Questions</Link>
              </li>
              <li>
                <Link to="/materials/term-paper">Term Papers</Link>
              </li>
              <li>
                <Link to="/materials/seminar-work">Seminar Work</Link>
              </li>
              <li>
                <Link to="/materials/project-research">Project Research</Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
