import React from "react";

function Results({ results }) {
  if (!results) return null;

  return (
    <div className="results">
      <h2>Prediction Results</h2>
      <ul>
        <li>
          <strong>{results.plant_name}</strong> <br />
          Probability: {(results.probability * 100).toFixed(2)}% <br />
          Common names: {results.common_names || "N/A"}
        </li>
      </ul>
    </div>
  );
}

export default Results;
