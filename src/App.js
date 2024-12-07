import React, { useState } from "react";
import UserForm from "./components/UserForm";

const App = () => {
  const [recommendation, setRecommendation] = useState(null);

  const handleRecommendation = (data) => {
    setRecommendation(data); // Lưu gợi ý vào state
  };

  return (
    <div style={{ padding: "20px", background: "#1e1e2f", color: "white" }}>
      <h1>Tư vấn sản phẩm</h1>
      <UserForm onRecommendation={handleRecommendation} />
      
      {/* Hiển thị gợi ý sản phẩm nếu có */}
      {recommendation && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid white" }}>
          <h2>Gợi ý sản phẩm:</h2>
          <p><strong>Sản phẩm:</strong> {recommendation.product}</p>
          <p><strong>Đặc điểm:</strong> {recommendation.features.join(", ")}</p>
          <p><strong>Mô tả:</strong> {recommendation.suggestion}</p>
          <p><strong>Giá:</strong> {recommendation.price}</p>
        </div>
      )}
    </div>
  );
};

export default App;
