import React from "react";

function Results({ results }) {
  if (!results) {
    return null; // nothing uploaded yet
  }

  // ✅ Plant.id API returns suggestions array
  const suggestions = results?.suggestions || [];

  return (
    <div className="mt-10 p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">🌱 Prediction Results</h2>

      {suggestions.length > 0 ? (
        <ul className="space-y-4">
          {suggestions.map((plant, idx) => (
            <li key={idx} className="p-4 border rounded-lg bg-gray-50">
              <a
                href={`https://www.google.com/search?q=${plant.plant_name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-green-700 hover:underline"
              >
                {plant.plant_name}
              </a>
              <p className="text-sm text-gray-600">
                Confidence: {(plant.probability * 100).toFixed(2)}%
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">❌ No plant detected. Try another image.</p>
      )}
    </div>
  );
}

export default Results;
