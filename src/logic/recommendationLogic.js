import { rules } from "../services/rules";

export const findRecommendation = (formData) => {
  return rules
    .filter((rule) => {
      const { condition } = rule;

      // Chỉ lấy sản phẩm thuộc loại được chọn
      if (formData.type && condition.type !== formData.type) return false;

      // Tiếp tục lọc các sản phẩm phù hợp với tiêu chí
      return (
        (!formData.purpose || condition.purpose === formData.purpose) &&
        (!formData.budget || eval(`${formData.budget || 0} ${condition.budget}`)) &&
        (!formData.features || formData.features.every(feature => condition.features?.includes(feature))) &&
        (!formData.form || condition.form === formData.form)
      );
    })
    .map((rule) => {
      const { condition } = rule;
      let score = 0;

      // Tính điểm dựa trên số tiêu chí khớp
      if (formData.purpose && condition.purpose === formData.purpose) score++;
      if (formData.budget && eval(`${formData.budget || 0} ${condition.budget}`)) score++;
      if (formData.features && formData.features.every(feature => condition.features?.includes(feature))) score++;
      if (formData.form && condition.form === formData.form) score++;

      return { ...rule.recommendation, score };
    })
    .sort((a, b) => b.score - a.score); // Sắp xếp giảm dần theo điểm
};

