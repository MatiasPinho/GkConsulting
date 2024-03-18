import { CardHistory } from "../../components/CardHistory/CardHistory";
import cardsInfo from "../../../data/cardsInfo.json";
import "./AboutHistory.css";

export const AboutHistory = () => {
  return (
    <section className="about-history-container">
      <div className="line-separator"></div>
      <section className="about-history">
        {cardsInfo.CardInfo_1 && (
          <CardHistory
            name={cardsInfo.CardInfo_1.name}
            description={cardsInfo.CardInfo_1.description}
            img={cardsInfo.CardInfo_1.img}
          />
        )}
        {cardsInfo.CardInfo_2 && (
          <CardHistory
            name={cardsInfo.CardInfo_2.name}
            description={cardsInfo.CardInfo_2.description}
            img={cardsInfo.CardInfo_2.img}
          />
        )}
      </section>
    </section>
  );
};
