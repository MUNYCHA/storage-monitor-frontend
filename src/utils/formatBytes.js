export function formatBytes(bytes, decimals = 2) {
  const n = Number(bytes);

  if (!Number.isFinite(n) || n <= 0) return "0 B";

  const k = 1024;
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(n) / Math.log(k));

  const value = n / Math.pow(k, i);
  const fixed = i === 0 ? 0 : decimals;

  return `${value.toFixed(fixed)} ${units[i]}`;
}
