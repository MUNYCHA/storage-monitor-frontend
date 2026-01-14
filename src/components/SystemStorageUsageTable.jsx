import React from "react";
import StorageUsageBar from "./StorageUsageBar";
import { formatBytes } from "../utils/formatBytes";

export default function SystemStorageUsageTable({
  serverStorageUsageGroupedBySystem,
}) {
  const SERVER_BG = ["bg-white", "bg-gray-200"];

  return (
    <div className="overflow-x-auto bg-white shadow rounded">
      <table className="w-full table-auto border-collapse text-sm border border-gray-300">
        <thead className="bg-blue-500 text-white text-[15px] font-normal">
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-left">
              Server-IP
            </th>
            <th className="border border-gray-300 px-3 py-2 text-left">
              Mount Path
            </th>
            <th className="border border-gray-300 px-3 py-2 text-center">
              Size
            </th>
            <th className="border border-gray-300 px-3 py-2 text-center">
              Used
            </th>
            <th className="border border-gray-300 px-3 py-2 text-center">
              Used%
            </th>
          </tr>
        </thead>

        <tbody className="text-[10px]">
          {Object.entries(serverStorageUsageGroupedBySystem).map(
            ([systemId, system]) => {
              return (
                <React.Fragment key={systemId}>
                  <tr className="bg-blue-500 font-khmer text-white">
                    <td
                      colSpan={5}
                      className="border border-gray-300 px-3 py-2 font-medium text-left"
                    >
                      ​​ {system.systemName}
                    </td>
                  </tr>

                  {Object.entries(system.servers).map(
                    ([serverIp, server], serverIndex) => {
                      const serverBg = SERVER_BG[serverIndex % 2];

                      let serverRendered = false;

                      return server.paths.map((path) => {
                        const row = (
                          <tr
                            key={`${systemId}-${serverIp}-${path.path}`}
                            className={serverBg}
                          >
                            {!serverRendered && (
                              <td
                                rowSpan={server.paths.length}
                                className="border border-gray-300 px-3 py-2
                                 align-middle text-left font-semibold"
                              >
                                {serverIp}
                              </td>
                            )}

                            <td className="border border-gray-300 px-3 py-2 text-left font-semibold">
                              {path.path}
                            </td>

                            <td className="border border-gray-300 px-3 py-2 text-center font-semibold">
                              {formatBytes(path.totalBytes)}
                            </td>

                            <td className="border border-gray-300 px-3 py-2 text-center font-semibold">
                              {formatBytes(path.usedBytes)}
                            </td>

                            <td className="border border-gray-300 px-3 py-2 text-center min-w-[50px]">
                              <StorageUsageBar usedPercent={path.usedPercent} />
                            </td>
                          </tr>
                        );

                        serverRendered = true;
                        return row;
                      });
                    }
                  )}
                </React.Fragment>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
