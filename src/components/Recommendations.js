import React from "react";

const Recommendations = ({ recommendations }) => (
  <div>
    <h2>Sản phẩm gợi ý</h2>
    {recommendations.map((rec, index) => (
      <div key={index} className="recommendation-card">
        <h3>{rec.product}</h3>
        <p><strong>Loại sản phẩm:</strong> {rec.type}</p>
        <p><strong>Giá:</strong> {rec.price}</p>
        <p><strong>Gợi ý:</strong> {rec.suggestion}</p>
        <p><strong>Tính năng nổi bật:</strong> {rec.features.join(", ")}</p>
      </div>
    ))}
  </div>
);

export default Recommendations;
