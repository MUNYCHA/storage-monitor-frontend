import React from "react";
import ServerStorageUsageRow from "./ServerStorageUsageRow";

function ServerStorageUsageTable({serverPathStorageUsages,serverIp}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse table-auto">
      <thead  className="bg-blue-100 text-blue-900">
        <tr>
          <th className="border border-gray-300 text-center">Server IP</th>
          <th className="border border-gray-300 text-left">Mount Path</th>
          <th className="border border-gray-300 text-center">Size</th>
          <th className="border border-gray-300 text-center">Used</th>
          <th className="border border-gray-300 text-center">Used %</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300">
        {serverPathStorageUsages.map((serverPathStorageUsage, index) => (
          <ServerStorageUsageRow key={serverPathStorageUsage.path} serverPathStorageUsage={serverPathStorageUsage} rowIndex={index} totalRows={serverPathStorageUsages.length} serverIp={serverIp} />
        ))}
      </tbody>
    </table>
    </div>

  );
}

export default ServerStorageUsageTable;
