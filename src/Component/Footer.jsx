import "../Sass/Footer.scss";
import insta from "../assets/insta.svg";
import linkden from "../assets/linkden.svg";
import git from "../assets/git.svg";
import wattsapp from "../assets/wattsapp.svg";
import icons from "../assets/social.json";

// map string keys in JSON to imported assets
const imageMap = {
  insta,
  linkden,
  git,
  wattsapp,
};

export const Footer = () => {
  return (
    <div className="section-6 beder">
      <div className="container-fluid">
        <div className="row">
          <ul className="d-flex gap-3 gap-md-5 py-2 py-md-3 mb-0 mt-md-2 justify-content-end">
            {icons.map((icon, index) => (
              <li className="icons" key={index}>
                {icon.link ? (
                  <a href={icon.link} target="_blank" rel="noopener noreferrer">
                    <img src={imageMap[icon.src]} alt={icon.name} />
                  </a>
                ) : (
                  <img src={imageMap[icon.src]} alt={icon.name} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
