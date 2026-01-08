export default function UsageBar({ usedPercent }) {
  const percent = Math.min(Math.max(usedPercent ?? 0, 0), 100);

  const color =
    percent >= 85
      ? "bg-red-500"
      : percent >= 70
      ? "bg-yellow-400"
      : "bg-green-500";

  return (
    <div className="relative h-4 w-full bg-slate-400 rounded-full">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${percent}%` }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-[15px] text-white">
        {percent.toFixed(1)}%
      </span>
    </div>
  );
}
