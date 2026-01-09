import { useEffect, useState } from "react";
import { fetchLatestServerStorageUsages } from "../services/api";
import { normalizeToArray } from "../utils/normalizeToArray";
import SystemStorageUsageTable from "../components/SystemStorageUsageTable";

export default function SystemStorageMonitorPage() {
  const [serverStorageUsages, setServerStorageUsages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLatestServerStorageUsages = async () => {
      try {
        const latestServerStorageUsages =
          await fetchLatestServerStorageUsages();
        setServerStorageUsages(normalizeToArray(latestServerStorageUsages));
      } catch (err) {
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    loadLatestServerStorageUsages();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  const serverStorageUsageGroupedBySystem = serverStorageUsages.reduce(
    (acc, item) => {
      if (!acc[item.systemId]) {
        acc[item.systemId] = {
          systemName: item.systemName,
          servers: {},
        };
      }

      if (!acc[item.systemId].servers[item.serverIp]) {
        acc[item.systemId].servers[item.serverIp] = {
          serverName: item.serverName,
          paths: [],
        };
      }

      acc[item.systemId].servers[item.serverIp].paths.push(
        ...item.mountPathStorageUsages
      );

      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 font-khmer text-2xl font-semibold text-slate-800">
        ស្ថានភាពទំហំ storage ប្រចាំថ្ងៃ
      </h1>

      <SystemStorageUsageTable
        serverStorageUsageGroupedBySystem={serverStorageUsageGroupedBySystem}
      />
    </div>
  );
}
