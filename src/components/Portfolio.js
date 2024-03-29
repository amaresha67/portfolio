import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  const imageNames = ["shoping.jpg", "charecter.jpg", "crop.jpeg"];
  const projectTittle = [
    "Online Shoping Manageent System",
    "Character Recognition for Specially Abled People",
    "Crop Recomendation System",
  ];
  const projectDescription = [
    " Online shopping management system website where we offer products of different categories for users and admin can perform CURD operation on database. Developed using MERN Stack  ",
    "This project presents an approach to develop such a system by that we can determine the most appropriate character from the sign that is being shown by the user or the person to the system.",
    "Crop Recommendation using real time temperature and humidity of the given city using weather API machine learning is used to recommend the crops based on temperature and humidity (KNeighborsClassifier)",
  ];
  const projectLinks = [
    "https://github.com/amaresha67/E-comerse",
    "https://github.com/amaresha67/Myprojects/tree/main/quizapp",
    "https://github.com/amaresha67/Myprojects/tree/main/tic-tac-toe",
  ];
  return (
    <div className="bg-secondary p-2 h-100 w-100 porfolioblock mt-5">
      <div>
        <div className="text-center border mt-5">
          <h3>My Projects</h3>
        </div>
        <div className="d-flex row p-5 border m-3 bg-warning rounded-3 justify-content-center imagesblock">
          <Image
            image={imageNames[0]}
            tittle={projectTittle[0]}
            projectDescription={projectDescription[0]}
            projectLinks={projectLinks[0]}
          />
          <Image
            image={imageNames[1]}
            tittle={projectTittle[1]}
            projectDescription={projectDescription[1]}
            projectLinks={projectLinks[1]}
          />
          <Image
            image={imageNames[2]}
            tittle={projectTittle[2]}
            projectDescription={projectDescription[2]}
            projectLinks={projectLinks[2]}
          />
        </div>
      </div>
    </div>
  );
}
function Image({ image, tittle, projectDescription, projectLinks }) {
  const [hover, setHover] = useState(false);
  const divStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${image})`,
    backgroundSize: "cover",
    height: "100px",
    width: "100px",
    color: "red",
    backgroundRepeat: "no-repeat",
    // backgroungColor: "blue",
  };

  return (
    <div
      className="col-3 d-flex justify-content-between  row bg-light rounded-3 h-100 mx-4 p-2 border border-info"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div style={divStyle} className="rounded-5 col-6"></div>
      <div className="col-6 px-4  pt-2 projectlink">
        <a href={projectLinks} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLink}
            className="bg-dark p-2 rounded-3 text-primary d-flex row"
          />
        </a>
        <span className="projectlink1  bg-secondary text-light  d-flex row px-1 rounded-2">
          github link
        </span>
      </div>
      {!hover && <h6 className="text-danger p-2 shadow ">{tittle}</h6>}
      {hover && (
        <p className="p-2 shadow text-success rounded-2  ">
          {projectDescription}
        </p>
      )}
    </div>
  );
}
export default Portfolio;
