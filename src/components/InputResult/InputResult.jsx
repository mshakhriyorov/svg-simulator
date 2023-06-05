import React from "react";

import "./InputResult.css";

export const InputResult = ({ result, label }) => {
  return (
    <div className="input-result">
      <div className="input-result__label">{label}</div>
      <div className="input-result__result">
        <input
          type="text"
          value={result}
          onChange={() => {}}
          disabled
          className="input-result__result-input"
        />
      </div>
    </div>
  );
};
