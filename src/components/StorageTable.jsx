import React from "react";
import UsageBar from "./UsageBar";
import { formatBytes } from "../utils/formatBytes";

export default function StorageTable({ groupedSystem }) {
  const SYSTEM_BG = ["bg-slate-100", "bg-white"];

  return (
    <div className="overflow-x-auto bg-white shadow rounded">
      <table className="w-full table-auto border-collapse text-sm border border-gray-300">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-center font-khmer">
              ប្រព័ន្ធ
            </th>
            <th className="border border-gray-300 px-3 py-2 text-center">
              Server IP
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

        <tbody>
          {Object.entries(groupedSystem).map(
            ([systemId, system], systemIndex) => {
              const systemBg = SYSTEM_BG[systemIndex % 2];

              const systemRowSpan = Object.values(system.servers).reduce(
                (sum, server) => sum + server.paths.length,
                0
              );

              let systemRendered = false;

              return Object.entries(system.servers).map(
                ([serverIp, server]) => {
                  let serverRendered = false;

                  return server.paths.map((path) => (
                    <tr
                      key={`${systemId}-${serverIp}-${path.path}`}
                      className={systemBg}
                    >
                      {!systemRendered && (
                        <td
                          rowSpan={systemRowSpan}
                          className="border border-gray-300 px-3 py-2 font-bold align-middle text-center"
                        >
                          {system.systemName}
                        </td>
                      )}

                      {!serverRendered && (
                        <td
                          rowSpan={server.paths.length}
                          className="border border-gray-300 px-3 py-2 align-middle text-center font-semibold text-green-600"
                        >
                          {serverIp}
                        </td>
                      )}

                      <td className="border border-gray-300 px-3 py-2 font-mono font-semibold">
                        {path.path}
                      </td>

                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">
                        {formatBytes(path.totalBytes)}
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">
                        {formatBytes(path.usedBytes)}
                      </td>

                      <td className="border border-gray-300 px-3 py-2 text-center min-w-[100px]">
                        <UsageBar usedPercent={path.usedPercent} />
                      </td>

                      {(systemRendered = true) && (serverRendered = true)}
                    </tr>
                  ));
                }
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
