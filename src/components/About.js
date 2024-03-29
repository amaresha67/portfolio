import { useReducer } from "react";
import AboutReduce from "../Reduce/aboutReduce";
const initialvalue = { skills: true, education: false };
function About() {
  const [state, dispatch] = useReducer(AboutReduce, initialvalue);
  return (
    <div className="bg-secondary p-5 h-100 w-100 mt-3 d-flex row justify-content-center">
      <div className="mt-5 text-center p-3  bg-warning-subtle col-6 mx-2  ">
        <h3 className="fw-bold">About Me</h3>
      </div>
      <div className="col-6 mx-2 bg-warning-subtle ">
        <p className="py-4 text-success fw-bold">
          Seeking an entry level engineering position where I can apply my
          strong analytical skills,attention to detail and teamwork capabilities
          to contribute to the successfull execution of engineering projects.
          When I'm not working, you can find me playing cricket,cooking,watching
          movies. I firmly believe in the power of lifelong learning.
        </p>
      </div>
      <div className="col-6 bg-secondary-subtle rounded-2 mt-2">
        <div className="d-flex row ">
          <h3
            onClick={() => {
              dispatch({ type: "skills" });
            }}
            className={
              state.skills
                ? "col-2 underline me-5 fw-bold cursor-pointer"
                : "col-2 me-5 fw-bold cursor-pointer"
            }
          >
            Skills
          </h3>
          <h3
            onClick={() => {
              dispatch({ type: "education" });
            }}
            className={
              state.education
                ? "col-2 underline ms-5 fw-bold cursor-pointer"
                : "col-2 ms-5 fw-bold cursor-pointer"
            }
          >
            Education
          </h3>
        </div>
        {state.skills && (
          <div className="row bg-primary-subtle rounded-3 py-3">
            <p>Core Java</p>
            <p>python</p>
            <p>C</p>
            <p>Web Development</p>
            <p>Data structures</p>
          </div>
        )}

        {state.education && (
          <div className="row bg-primary-subtle rounded-3 py-3">
            <div className=" row p-2">
              <span className="col-9 fw-semibold">
                University BDT collage of Engineering
              </span>
              <span className="col-3 fw-semibold">[2019-2023]</span>

              <span className="col-9 text-danger-emphasis ">
                B.E in Computer Science, Davanagere
              </span>
              <span className="col-3 text-danger-emphasis">(7.73 CGPA)</span>
            </div>
            <div className="row p-2">
              <span className="col-9 fw-semibold">
                Anubhava mantapa Independent P U collage
              </span>
              <span className="col-3 fw-semibold">[2017-2019]</span>

              <span className="col-9 text-danger-emphasis">
                PU in PCMB, Davanagere, Karnataka
              </span>
              <span className="col-3 text-danger-emphasis ">(86.17%)</span>
            </div>
            <div className="row" p-2>
              <span className="col-9 fw-semibold">
                Morarji Desai Resudencial School{" "}
              </span>
              <span className="col-3 fw-semibold">[2016-2017]</span>

              <span className="col-9 text-danger-emphasis">
                SSLC, Kavital, Karnataka
              </span>
              <span className="col-3 text-danger-emphasis">(92.64%)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
