import React from "react";

function UsageProgress({ usedPercent }) {
  const percent = Math.min(Math.max(usedPercent, 0), 100);

  return (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      <div style={{ width: "100px", height: "6px", background: "#e5e7eb" }}>
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background:
              percent > 85 ? "#dc2626" : percent > 70 ? "#f59e0b" : "#16a34a",
          }}
        />
      </div>
      <span>{percent.toFixed(1)}%</span>
    </div>
  );
}

export default UsageProgress;
