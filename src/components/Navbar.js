import { Link } from "react-router-dom";
import { useReducer } from "react";
import NavReducer from "../Reduce/navReduce";
export default function Navbar() {
  const intialValues = {
    home: true,
    portfolio: false,
    education: false,
    contact: false,
  };
  const [state, dispatch] = useReducer(NavReducer, intialValues);
  var styl = "text-decoration-none navlink";
  var activestyle = "activestyle";
  return (
    <div className="d-flex bg-dark text-white row p-2 fixed-top">
      <div className="col-6">
        <h1>Amaresha</h1>
      </div>
      <div className="col-6 row p-2 ">
        <div className="col">
          <Link
            to="/"
            className={state.home ? activestyle : styl}
            onClick={() => dispatch({ type: "home" })}
          >
            Home
          </Link>
        </div>
        <div className="col">
          <Link
            to="/portfolio"
            className={state.portfolio ? activestyle : styl}
            onClick={() => dispatch({ type: "portfolio" })}
          >
            Portfolio
          </Link>
        </div>
        <div className="col">
          <Link
            to="/education"
            className={state.education ? activestyle : styl}
            onClick={() => dispatch({ type: "education" })}
          >
            About
          </Link>
        </div>
        <div className="col">
          <Link
            to="/contact"
            className={state.contact ? activestyle : styl}
            onClick={() => dispatch({ type: "contact" })}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
