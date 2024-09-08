import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

const Card = () => {
  const { t } = useTranslation();

  return (
    <div className="card-container">
      <div className="card-content">
        <h1 className="card-title">{t("title")}</h1>
      </div>
    </div>
  );
};

export default Card;
