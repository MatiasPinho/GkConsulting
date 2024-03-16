import { Bribery } from "../../assets/icons/Bribery";
import "./CardServices.css";
export const CardServices = ({
  title,
  servicesDescriptions_1,
  servicesDescriptions_2,
}) => {
  return (
    <article className="card-services">
      <div className="card-services__logo-title">
        <Bribery />
        <h3 className="card-services__title">{title}</h3>
      </div>
      <div className="card-services__ul-description-container">
        <ul className="card-services__ul">
          {servicesDescriptions_1
            ? servicesDescriptions_1.description_1.map((description) => (
                <li key={description} className="card-services__description">
                  {description}
                </li>
              ))
            : servicesDescriptions_2.description_1.map((description) => (
                <li key={description} className="card-services__description">
                  {description}
                </li>
              ))}
        </ul>
        {/* <ul className="card-services__ul">
          {servicesDescriptions_1
            ? servicesDescriptions_1.description_2.map((description) => (
                <li key={description} className="card-services__description">
                  {description}
                </li>
              ))
            : servicesDescriptions_2.description_2.map((description) => (
                <li key={description} className="card-services__description">
                  {description}
                </li>
              ))}
        </ul> */}
      </div>
    </article>
  );
};
