import { Bribery } from "../../assets/icons/Bribery";
import "./CardServices.css";

export const CardServices = ({ title, description }) => {
  return (
    <article className="card-services">
      <div className="card-services__logo-title">
        <Bribery />
        <h3 className="card-services__title">{title}</h3>
      </div>
      <div className="card-services__ul-description-container">
        <ul className="card-services__ul">
          {description.map((description) => (
            <li key={description} className="card-services__description">
              {description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
