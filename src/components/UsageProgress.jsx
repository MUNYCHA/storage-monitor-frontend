import React from "react";

function UsageProgress({ usedPercent }) {
  const percent = Math.min(Math.max(usedPercent, 0), 100);

  const barColor =
    percent > 85
      ? "bg-red-500"
      : percent > 70
      ? "bg-amber-400"
      : "bg-green-500";

  return (
    <div className="w-48">
      <div className="relative h-4 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${barColor} transition-all duration-300`}
          style={{ width: `${percent}%` }}
        />

        {/* Percentage label inside bar */}
        <span
          className="
            absolute inset-0 flex items-center justify-center
            text-[10px] font-medium text-white tabular-nums
          "
        >
          {percent.toFixed(1)}%
        </span>
      </div>
    </div>
  );
}


export default UsageProgress;
