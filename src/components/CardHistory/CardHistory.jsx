import { Linkedin } from "../../assets/icons/Linkedin";
import { useState } from "react";
import "./CardHistory.css";
export const CardHistory = ({ name, description, img, surname }) => {
  console.log(surname);
  const [isImageClicked, setIsImageClicked] = useState(false);
  console.log(isImageClicked);
  return (
    <article className="about-history__profile">
      <span className="about-history__profile-info">
        <a href="">
          <Linkedin className="about-history__profile-linkedin" />
        </a>

        <h2 className="about-history__profile-name">
          {surname === "Barbero" ? (
            <>
              {name} <strong className="alternative-strong">{surname}</strong>
            </>
          ) : (
            <>
              <strong>{name}</strong> {surname}
            </>
          )}
        </h2>
      </span>
      <div className="about-history__profile-content">
        <img
          onClick={() => {
            setIsImageClicked(!isImageClicked);
          }}
          className={`about-history__profile-image ${
            isImageClicked ? "opacity-true_2" : ""
          }`}
          src={img}
          alt=""
        />
        <div
          onClick={() => {
            setIsImageClicked(false);
          }}
          className={`about-history__profile-description ${
            isImageClicked ? "opacity-true" : ""
          }`}
        >
          {description.map((paragraph) => {
            return <p key={paragraph}>{paragraph}</p>;
          })}
        </div>
      </div>
    </article>
  );
};
