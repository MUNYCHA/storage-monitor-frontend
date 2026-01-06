import React from "react";
import ServerStorageUsageCard from "./ServerStorageUsageCard";


function SystemStorageUsageCard({ systemName, systemStorageUsages }) {
  return (
    <div className="bg-slate-700 border border-slate-300 rounded-lg shadow-sm p-4 space-y-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out">

      <h2 className="text-base font-semibold text-slate-100">
        ប្រព័ន្ធ: {systemName}
      </h2>

      <div className="space-y-4 ">
        {systemStorageUsages.map((systemStorageUsage) => (
          <ServerStorageUsageCard
            key={systemStorageUsage.serverIp}
            serverName={systemStorageUsage.serverName}
            serverIp={systemStorageUsage.serverIp}
            collectedAt={systemStorageUsage.collectedAt}
            serverPathStorageUsages={systemStorageUsage.serverPathStorageUsages}
          />
        ))}
      </div>
    </div>
  );
}
export default SystemStorageUsageCard;