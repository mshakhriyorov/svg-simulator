import React from "react";

import "./Layout.css";

import { InputResult } from "../InputResult";

import vehiclesData from "../testData/vehicles.json";

export const Layout = ({
  vehicleId,
  isVisibleLayout,
  setIsVisibleLayout,
  setId,
}) => {
  const products = vehiclesData.vehicles;

  const handleCloseLayout = (e) => {
    e.stopPropagation();
    setIsVisibleLayout(false);
    setId("");
  };

  return products?.map(
    ({ image, make, model, color, year, id, country, driver, type }) =>
      id === vehicleId && (
        <div
          key={id}
          className={`layout ${isVisibleLayout ? "layout--visible" : ""}`}
          onClick={handleCloseLayout}
          aria-hidden="true"
        >
          <div
            className={`layout__container ${
              isVisibleLayout ? "layout__container--hidden" : ""
            }`}
          >
            <div className="layout__box">
              <div className="layout__image-box">
                <div className="layout__image">
                  <img src={image} alt={id} />
                </div>
                <div className="layout__image-bottom">
                  <div className="layout__title">
                    Name
                    <div className="layout__title-id">
                      <span>{make}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="layout__results">
                <InputResult label="Model" result={model} />
                <InputResult label="Color" result={color} />
                <InputResult label="Year" result={year} />
                <InputResult label="Country" result={country.name} />
                <InputResult label="Type" result={type} />
                <InputResult label="Driver" result={driver.name} />
              </div>
            </div>
          </div>
        </div>
      )
  );
};
