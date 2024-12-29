import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CreatePost.css";

const CreatePost = () => {
  const [department, setDepartment] = useState("");
  const [materials, setMaterials] = useState("");
  const [college, setCollege] = useState("");
  const [level, setLevel] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [bookcover, setBookCover] = useState(null);
  const [bookCoverPreview, setBookCoverPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("user"));
    if (!userInfo || !["admin", "staff"].includes(userInfo.role)) {
      setError("Please log in.");
      navigate("/");
    }
  }, [navigate]);

  const handleCoverPictureChange = (event) => {
    const file = event.target.files[0];
    if (file && ["image/jpeg", "image/png"].includes(file.type)) {
      const img = new Image();
      img.onload = () => {
        setBookCover(file);
        setBookCoverPreview(URL.createObjectURL(file));
      };
      img.src = URL.createObjectURL(file);
    }
  };

  const submitForm = async () => {
    const token = sessionStorage.getItem("token");

    const userInfo = JSON.parse(sessionStorage.getItem("user"));
    const userId = userInfo.id;

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("selectedDepartment", department);
      formData.append("selectedCollege", college);
      formData.append("selectedLevel", level);
      formData.append("materials", materials);
      formData.append("title", title);
      formData.append("price", price);
      formData.append("author", author);
      formData.append("bookcover", bookcover);

      const response = await fetch(
        "https://ebookshop-v9a3.onrender.com/post/upload-books",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        setIsLoading(false);
        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.error);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="CreatePostBody">
      <section className="CreatePost">
        <Link to="/">
          <h2>Upload a Book</h2>
        </Link>
        {error && <p className="post_response">{error}</p>}
        {isLoading && (
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        )}
        <section>
          <div>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleCoverPictureChange}
            />
            <br />
            {bookCoverPreview && (
              <div className="cover-preview">
                <img
                  id="coverDisplay"
                  src={bookCoverPreview}
                  alt="Cover Preview"
                />
              </div>
            )}
          </div>
          <div>
            <label>College:</label>
            <select
              name="college"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              required
            >
              <option value="">Select College</option>
              <option value="colpas">COLPAS</option>
              <option value="colnas">COLNAS</option>
              <option value="colmas">COLMAS</option>
              <option value="caerse">CAERSE</option>
              <option value="casap">CASAP</option>
              <option value="cafst">CAFST</option>
              <option value="ccss">CCSS</option>
              <option value="coed">COED</option>
              <option value="ceet">CEET</option>
              <option value="cnrem">CNREM</option>
              <option value="cvm">CVM</option>
              <option value="sgs">SGS</option>
            </select>
          </div>
          <div>
            <label>Department:</label>
            <select
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              <option value="">Select Department</option>
              <option value="computer-science">Computer Science</option>
              <option value="chemistry">Chemistry</option>
              <option value="geology">Geology</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="statistics">Statistics</option>
              <option value="biochemistry">Biochemistry</option>
              <option value="microbiology">Microbiology</option>
              <option value="plantscience">
                Plant Science & Biotechnology
              </option>
              <option value="industrial-relations">
                Industrial Relations & Personal Management
              </option>
              <option value="human-resource">Human Resource Management</option>
              <option value="agribusiness">Agribusiness & Management</option>
              <option value="agrieconomics">Agricultural Economics</option>
              <option value="agricextension">
                Agricultural Extension & Rural Sociology
              </option>
              <option value="animalbreeding">
                Animal Breeding & Physiology
              </option>
              <option value="animalnutrition">
                Animal Nutrition & Forage Science
              </option>
              <option value="animalproduction">
                Animal Production & Livestock Management
              </option>
              <option value="human-nutrition">
                Human Nutrition and Dietetics
              </option>
              <option value="home-science">
                Home Science/Hospitality Management & Tourism
              </option>
              <option value="foodscience">Food Science and Technology</option>
              <option value="agronomy">Agronomy</option>
              <option value="Plant Health Management">
                Plant Health Management
              </option>
              <option value="soil-science">Soil Science and Meteorology</option>
              <option value="water-resources">
                Water Resources Management and Agrometeorology
              </option>
              <option value="adult-education">
                Adult and Continuing Education
              </option>
              <option value="agric-education">
                Agricultural/Home Science Education
              </option>
              <option value="business-education">Business Education</option>
              <option value="economic-education">Economics Education</option>
              <option value="education-management">Education Management</option>
              <option value="it-education">
                Industrial Technology Education
              </option>
              <option value="library-science">
                Library and Information Science
              </option>
              <option value="guidance">Guidance and Counselling</option>
              <option value="integrated-education">
                Integrated Science Education
              </option>
              <option value="abe">
                Agricultural and Bioresources Engineering
              </option>
              <option value="ci-e">Civil Engineering</option>
              <option value="ch-e">Chemical Engineering</option>
              <option value="eee">
                Electrical and Electronics Engineering
              </option>
              <option value="me-e">Mechanical Engineering</option>
              <option value="emt">Environment Management and Toxicology</option>
              <option value="farmt">
                Fisheries and Aquatic Resources Management
              </option>
              <option value="fem">Forestry and Environmental Management</option>
              <option value="theriogenology">Theriogenology</option>
              <option value="veterinary-anatomy">Veterinary Anatomy</option>
              <option value="veterinary-medicine">Veterinary Medicine</option>
              <option value="veterinary-microbiology">
                Veterinary Microbiology
              </option>
              <option value="veterinary-phpm">
                Veterinary Public Health and Preventive Medicine
              </option>
              <option value="veterinary-sr">
                Veterinary Surgery and Radiology
              </option>
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="history">History</option>
              <option value="social-science">Social Science</option>
              <option value="physical-and-health">Physical and Health</option>
              <option value="philosophy">Philosophy</option>
              <option value="peace-and-conflict">Peace and Conflict</option>
            </select>
          </div>
          <div>
            <label>Level:</label>
            <select
              name="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            >
              <option value="">Select Level</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
              <option value="500">500</option>
              <option value="600">600</option>
              <option value="phd">PhD</option>
              <option value="msc">MSc</option>
            </select>
          </div>
          <div>
            <label>Digital Material:</label>
            <select
              name="materials"
              value={materials}
              onChange={(e) => setMaterials(e.target.value)}
            >
              <option value="">Select Material (OPTIONAL)</option>
              <option value="past-questions">PAST QUESTIONS</option>
              <option value="term-paper">TERM PAPERS</option>
              <option value="seminar-work">SEMINAR WORK</option>
              <option value="project-research">PROJECT WORK</option>
            </select>
          </div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick={submitForm}>
            {isLoading ? "Uploading..." : "Upload"}
          </button>
        </section>
      </section>
    </div>
  );
};

export default CreatePost;
