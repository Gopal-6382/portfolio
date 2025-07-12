import "../Sass/Footer.scss";
import insta from "../assets/insta.svg";
import linkden from "../assets/linkden.svg";
import git from "../assets/git.svg";
import wattsapp from "../assets/wattsapp.svg";
export const Footer = () => {
  return (
    <div className="section-6 beder">

      <div className="container-fluid ">
        <div className="row ">
          <ul className="d-flex  gap-3 gap-md-5 py-2 py-md-3  mb-0 mt-md-2 justify-content-end">
            <li className="icons ">
              <img src={git} alt="img" />
            </li>
            <li className="icons">
              <img src={linkden} alt="img" />
            </li>
            <li className="icons">
              <img src={wattsapp} alt="img" />
            </li>
            <li className="icons">
              <img src={insta} alt="img" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
