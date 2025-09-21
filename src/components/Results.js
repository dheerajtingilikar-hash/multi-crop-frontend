import React from "react";

function Results({ results }) {
  if (!results) return null;

  return (
    <div className="mt-6 p-4 bg-white shadow rounded">
      <h3 className="text-lg font-bold mb-2">Prediction Results</h3>
      <pre className="text-left text-sm bg-gray-100 p-2 rounded">
        {JSON.stringify(results, null, 2)}
      </pre>
    </div>
  );
}

export default Results;
