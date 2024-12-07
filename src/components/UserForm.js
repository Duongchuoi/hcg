import React, { useState, useEffect } from "react";
import "./UserForm.css";
import { findRecommendation } from "../logic/recommendationLogic";

const UserForm = () => {
  const [type, setType] = useState("mouse"); // Mặc định chọn "chuột"
  const [purpose, setPurpose] = useState("");
  const [budget, setBudget] = useState("");
  const [features, setFeatures] = useState([]);
  const [layout, setLayout] = useState("");
  const [form, setForm] = useState("");
  const [switchType, setSwitchType] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const featureOptions = {
    mouse: ["DPI cao", "không dây"],
    keyboard: ["RGB"],
    headset: ["âm thanh vòm", "chống ồn", "micro chất lượng cao"],
  };
  const layoutOptions = {
    keyboard: ["60%", "75%", "95%", "100%"],
  };
  const formOptions = {
    mouse: ["Ergonomic", "Symmetrical"],
    headset: ["in-ear", "over-ear"],
  };
  const switchOptions = {
    keyboard: ["Linear", "Clicky", "Tactile"],
  };
  const purposeOptions = {
    mouse: ["gaming", "office", "design"],
    keyboard: ["gaming", "office", "programming"],
    headset: ["gaming", "music", "office"],
  };

  // Cập nhật danh sách sản phẩm khi tiêu chí thay đổi
  useEffect(() => {
    const filteredRecommendations = findRecommendation({
      type, // Bắt buộc loại sản phẩm
      purpose,
      budget: budget || Infinity,
      features: features.length > 0 ? features : [],
      form: form || undefined,
    });
    setRecommendations(filteredRecommendations);
  }, [type, purpose, budget, features, form]);  

  const handleFeatureChange = (feature) => {
    setFeatures((prevFeatures) =>
      prevFeatures.includes(feature)
        ? prevFeatures.filter((f) => f !== feature)
        : [...prevFeatures, feature]
    );
  };

  return (
    <div>
      <form className="user-form">
        <label>Loại sản phẩm:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="mouse">Chuột</option>
          <option value="keyboard">Bàn phím</option>
          <option value="headset">Tai nghe</option>
        </select>

        <label>Mục đích sử dụng:</label>
        <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
          <option value="">Chọn mục đích</option>
          {purposeOptions[type]?.map((p, index) => (
            <option key={index} value={p}>{p}</option>
          ))}
        </select>

        <label>Ngân sách (VNĐ):</label>
        <input
          type="number"
          value={budget}
          placeholder="Nhập ngân sách của bạn"
          onChange={(e) => setBudget(e.target.value)}
        />

        <label>Tính năng đặc biệt:</label>
        {featureOptions[type]?.map((feature, index) => (
          <div key={index}>
            <input
              type="checkbox"
              value={feature}
              checked={features.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
            />
            <label>{feature}</label>
          </div>
        ))}
        {type === "keyboard" && (
        <>
          <label>Layout phím:</label>
          <select value={layout} onChange={(e) => setLayout(e.target.value)}>
            <option value="">Chọn layout</option>
            {layoutOptions.keyboard.map((layout, index) => (
              <option key={index} value={layout}>{layout}</option>
            ))}
          </select>
        </>
      )}
      {["keyboard"].includes(type) && (
        <>
          <label>Switch Type:</label>
          <select value={switchType} onChange={(e) => setSwitchType(e.target.value)}>
            <option value="">Chọn switch type</option>
            {switchOptions[type]?.map((switchOption, index) => (
              <option key={index} value={switchOption}>{switchOption}</option>
            ))}
          </select>
        </>
      )}
        {type === "mouse" && (
          <>
            <label>Form chuột:</label>
            <select value={form} onChange={(e) => setForm(e.target.value)}>
              <option value="">Chọn form chuột</option>
              {formOptions.mouse.map((formOption, index) => (
                <option key={index} value={formOption}>{formOption}</option>
              ))}
            </select>
          </>
        )}
      </form>

      {/* Hiển thị kết quả */}
      <div className="recommendations">
      <h2>Kết quả gợi ý:</h2>
      {recommendations.length > 0 ? (
        recommendations.map((rec, index) => (
          <div key={index} className="recommendation-item">
            <p><strong>Sản phẩm:</strong> {rec.product}</p>
            <p><strong>Đặc điểm:</strong> {rec.features.join(", ")}</p>
            <p><strong>Mô tả:</strong> {rec.suggestion}</p>
            <p><strong>Giá:</strong> {rec.price}</p>
          </div>
        ))
      ) : (
        <p>Không có sản phẩm phù hợp với tiêu chí hiện tại.</p>
      )}
      </div>

    </div>
  );
};

export default UserForm;
