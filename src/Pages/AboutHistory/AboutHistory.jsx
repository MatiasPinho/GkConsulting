import { CardHistory } from "../../components/CardHistory/CardHistory";
import { Link } from "react-router-dom";
import cardsInfo from "../../../data/cardsInfo.json";
import "./AboutHistory.css";

export const AboutHistory = () => {
  return (
    <section className="about-history-container">
      <div className="line-separator-top"></div>

      <section className="about-history">
        {cardsInfo.CardInfo_1 && (
          <CardHistory
            name={cardsInfo.CardInfo_1.name}
            surname={cardsInfo.CardInfo_1.surname}
            description={cardsInfo.CardInfo_1.description}
            img={cardsInfo.CardInfo_1.img}
          />
        )}
        {cardsInfo.CardInfo_2 && (
          <CardHistory
            name={cardsInfo.CardInfo_2.name}
            surname={cardsInfo.CardInfo_2.surname}
            description={cardsInfo.CardInfo_2.description}
            img={cardsInfo.CardInfo_2.img}
          />
        )}
      </section>
      <section className="about-work">
        <div className="about-work-content">
          <h1 className="about-work__title">
            <strong className="alternative-strong">Trabajá</strong> con Nosotras
          </h1>
          <Link className="about-work__contact button-a" to="/#contact-id">
            Contactanos
          </Link>
        </div>
      </section>
    </section>
  );
};
