import React from "react";
import ServerStorageUsageTable from "./ServerStorageUsageTable";

function ServerStorageUsageCard({
  serverName,
  serverIp,
  collectedAt,
  serverPathStorageUsages,
}) {
  return (

  <div className="p-4 bg-slate-100 rounded-lg shadow-sm">
    <ServerStorageUsageTable
      serverPathStorageUsages={serverPathStorageUsages}
      serverIp={serverIp}
    />
  </div>

  );
}

export default ServerStorageUsageCard;
