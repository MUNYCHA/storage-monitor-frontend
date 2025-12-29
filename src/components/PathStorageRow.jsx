import React from "react";
import UsageProgress from "./UsageProgress";

function PathStorageRow({ pathStorage }) {
  return (
    <tr>
      <td>{pathStorage.path}</td>
      <td>{pathStorage.totalBytes}</td>
      <td>{pathStorage.usedBytes}</td>
      <td>
        <UsageProgress usedPercent={pathStorage.usedPercent}></UsageProgress>
      </td>
    </tr>
  );
}
export default PathStorageRow;
