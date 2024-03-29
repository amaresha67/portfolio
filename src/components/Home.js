import pdfFile from "./Amaresha.pdf";
function Home() {
  return (
    <div className="bg-secondary row home mt-5">
      <div className=" d-flex align-items-center col-8 text-center mt-3">
        <div className="ps-4">
          <h5 className="bg-warning rounded-1 d-inline-flex p-2 opacity-75 shadow">
            Hey, I'm Amaresha{" "}
          </h5>
          <h1 className="text-container shadow-lg rounded">
            I Build and design MERN Stack Projects and very proficient in Core
            Java, python, SQL, HTML, CSS, Bootstrap
          </h1>

          <button className="download bg-danger-subtle rounded-2">
            <a
              href={pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none px-1"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <div className="col-3 p-2 mt-5">
        <img
          className="rounded-5 shadow-lg p-3"
          src={process.env.PUBLIC_URL + "/images/Profile.jpg"}
          alt="Example"
          width="80%"
          height="90%"
        />
      </div>
    </div>
  );
}

export default Home;
