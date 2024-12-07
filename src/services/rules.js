export const rules = [
  // ================= CHUỘT =================
  // Chuột gaming - Phân khúc thấp
  {
    condition: {
      type: "mouse",
      purpose: "gaming",
      budget: "<1000000",
      features: ["DPI cao"],
      form: "Symmetrical",
    },
    recommendation: {
      product: "Logitech G102",
      features: ["DPI 8000", "Form Symmetrical"],
      suggestion: "Chuột Logitech G102 giá rẻ với DPI cao và thiết kế symmetrical.",
      price: "700,000 VNĐ",
    },
  },
  // Chuột gaming - Phân khúc trung
  {
    condition: {
      type: "mouse",
      purpose: "gaming",
      budget: "<2000000",
      features: ["DPI cao", "không dây"],
      form: "Ergonomic",
    },
    recommendation: {
      product: "Razer Basilisk X",
      features: ["DPI 16000", "Không dây", "Form Ergonomic"],
      suggestion: "Chuột không dây Razer Basilisk X với DPI cao và form ergonomic.",
      price: "1,800,000 VNĐ",
    },
  },
  // Chuột gaming - Phân khúc cao cấp
  {
    condition: {
      type: "mouse",
      purpose: "gaming",
      budget: ">2000000",
      features: ["DPI cao"],
      form: "Ergonomic",
    },
    recommendation: {
      product: "Logitech G502 X Plus",
      features: ["DPI 25000", "Form Ergonomic", "RGB"],
      suggestion: "Chuột Logitech G502 X Plus dành cho game thủ chuyên nghiệp.",
      price: "2,900,000 VNĐ",
    },
  },
  // Chuột văn phòng - Phân khúc thấp
  {
    condition: {
      type: "mouse",
      purpose: "office",
      budget: "<1000000",
      features: ["không dây"],
      form: "Symmetrical",
    },
    recommendation: {
      product: "Logitech M170",
      features: ["Thiết kế cơ bản", "Không dây"],
      suggestion: "Chuột không dây Logitech M170 nhỏ gọn cho văn phòng.",
      price: "300,000 VNĐ",
    },
  },
  // Chuột văn phòng - Phân khúc trung
  {
    condition: {
      type: "mouse",
      purpose: "office",
      budget: "<2000000",
      features: ["không dây"],
      form: "Ergonomic",
    },
    recommendation: {
      product: "Logitech M590",
      features: ["Thiết kế ergonomic", "Không dây", "Chống ồn"],
      suggestion: "Chuột không dây Logitech M590 với thiết kế ergonomic cho văn phòng.",
      price: "1,300,000 VNĐ",
    },
  },
  // Chuột đồ họa - Phân khúc cao cấp
  {
    condition: {
      type: "mouse",
      purpose: "design",
      budget: ">2000000",
      features: ["DPI cao"],
      form: "Ergonomic",
    },
    recommendation: {
      product: "Logitech MX Master 3S",
      features: ["DPI 8000", "Thiết kế ergonomic", "Cuộn ngang"],
      suggestion: "Chuột Logitech MX Master 3S chuyên dụng cho thiết kế đồ họa.",
      price: "2,900,000 VNĐ",
    },
  },

  // ================= BÀN PHÍM =================
  // Bàn phím gaming - Phân khúc thấp
  {
    condition: {
      type: "keyboard",
      purpose: "gaming",
      budget: "<1000000",
      features: ["RGB"],
      switchType: "Clicky",
      layout: "60%",
    },
    recommendation: {
      product: "Redragon K617",
      features: ["Switch Clicky", "Layout 60%", "LED RGB"],
      suggestion: "Bàn phím Redragon K617 giá rẻ với switch Clicky và RGB.",
      price: "950,000 VNĐ",
    },
  },
  // Bàn phím gaming - Phân khúc trung
  {
    condition: {
      type: "keyboard",
      purpose: "gaming",
      budget: "<2000000",
      features: ["RGB"],
      switchType: "Tactile",
      layout: "75%",
    },
    recommendation: {
      product: "Keychron K2",
      features: ["Switch Tactile", "Layout 75%", "LED RGB"],
      suggestion: "Bàn phím Keychron K2 với switch Tactile và LED RGB.",
      price: "1,900,000 VNĐ",
    },
  },
  // Bàn phím gaming - Phân khúc cao cấp
  {
    condition: {
      type: "keyboard",
      purpose: "gaming",
      budget: ">2000000",
      features: ["RGB"],
      switchType: "Linear",
      layout: "100%",
    },
    recommendation: {
      product: "Corsair K95 RGB Platinum",
      features: ["Switch Linear", "Layout 100%", "LED RGB"],
      suggestion: "Bàn phím Corsair K95 RGB Platinum dành cho game thủ cao cấp.",
      price: "3,500,000 VNĐ",
    },
  },

  // ================= TAI NGHE =================
  // Tai nghe gaming - Phân khúc thấp
  {
    condition: {
      type: "headset",
      purpose: "gaming",
      budget: "<1000000",
      features: ["âm thanh vòm"],
      form: "over-ear",
    },
    recommendation: {
      product: "Kotion Each GS410",
      features: ["Âm thanh vòm", "Thiết kế over-ear"],
      suggestion: "Tai nghe gaming Kotion Each GS410 giá rẻ với âm thanh vòm.",
      price: "600,000 VNĐ",
    },
  },
  // Tai nghe gaming - Phân khúc trung
  {
    condition: {
      type: "headset",
      purpose: "gaming",
      budget: "<2000000",
      features: ["âm thanh vòm", "chống ồn"],
      form: "over-ear",
    },
    recommendation: {
      product: "HyperX Cloud Stinger",
      features: ["Âm thanh vòm", "Chống ồn", "Thiết kế over-ear"],
      suggestion: "Tai nghe HyperX Cloud Stinger với chống ồn và âm thanh vòm.",
      price: "1,500,000 VNĐ",
    },
  },
  // Tai nghe gaming - Phân khúc cao cấp
  {
    condition: {
      type: "headset",
      purpose: "gaming",
      budget: ">2000000",
      features: ["âm thanh vòm", "chống ồn"],
      form: "over-ear",
    },
    recommendation: {
      product: "SteelSeries Arctis Pro",
      features: ["Âm thanh vòm", "Chống ồn", "Thiết kế over-ear"],
      suggestion: "Tai nghe SteelSeries Arctis Pro dành cho game thủ chuyên nghiệp.",
      price: "3,200,000 VNĐ",
    },
  },
];
