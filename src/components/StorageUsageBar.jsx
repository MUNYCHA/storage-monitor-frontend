export default function StorageUsageBar({ usedPercent }) {
  const percent = Math.min(Math.max(usedPercent ?? 0, 0), 100);
  const displayPercent = Math.ceil(percent);

  const color =
    percent >= 85
      ? "bg-red-500"
      : percent >= 70
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className="relative h-3 w-full bg-slate-500 rounded-full">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${displayPercent}%` }}
      />
      <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white">
        {displayPercent}%
      </span>
    </div>
  );
}
