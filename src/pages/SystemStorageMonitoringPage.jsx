import { useEffect, useState } from "react";
import SystemGroupCard from "../components/SystemStorageUsageCard";  

function SystemStorageMonitoringPage() {
  const [systemStorageUsages, setSystemStorageUsages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function normalizeToArray(data) {
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
}


  useEffect(() => {
    async function fetchSystemStorageUsages() {
      try {
        const res = await fetch("http://192.168.60.137:4141/api/system-storage-snapshot/latest");
        if (!res.ok) throw new Error("Failed to fetch snapshot");
        const data = await res.json();
        setSystemStorageUsages(normalizeToArray(data));
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSystemStorageUsages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

const groupedBySystemId = systemStorageUsages.reduce((acc, systemStorageUsage) => {
  if (!acc[systemStorageUsage.systemId]) {
    acc[systemStorageUsage.systemId] = {
      systemName: systemStorageUsage.systemName,
      systemStorageUsages: [],
    };
  }

  acc[systemStorageUsage.systemId].systemStorageUsages.push(systemStorageUsage);
  return acc;
}, {});



  return (
<div className="min-h-screen bg-slate-">
  <div className="space-y-6 px-6 py-8">
      {Object.values(groupedBySystemId).map((system) => (
    <SystemGroupCard
      key={system.systemId}
      systemName={system.systemName}
      systemStorageUsages={system.systemStorageUsages}
    />
  ))}
  </div>
</div>



  );
}

export default SystemStorageMonitoringPage;
