import React from "react";
import UsageProgress from "./UsageProgress";
import formatBytes from "../utils/formatBytes";

function ServerStorageUsageRow({ serverPathStorageUsage, serverIp, rowIndex, totalRows }) {
  return (
    <tr className="bg-white">
        {rowIndex === 0 && (
          <td
            rowSpan={totalRows}
            className="border border-gray-300 text-center"
          >
            {serverIp}
          </td>
        )}
      <td className="border border-gray-300 text-left">{serverPathStorageUsage.path}</td>
      <td className="border border-gray-300 text-center">{formatBytes(serverPathStorageUsage.totalBytes)}</td>
      <td className="border border-gray-300 text-center">{formatBytes(serverPathStorageUsage.usedBytes)}</td>
      <td className="border border-gray-300">
        <div className="flex justify-center">
         <UsageProgress usedPercent={serverPathStorageUsage.usedPercent} />
        </div>
      </td>

    </tr>
  );
}
export default ServerStorageUsageRow;
