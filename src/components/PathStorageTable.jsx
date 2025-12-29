import React from "react";
import PathStorageRow from "./PathStorageRow";

function PathStorageTable({ pathStorages }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Mount Path</th>
          <th>Size</th>
          <th>Used</th>
          <th>Used %</th>
        </tr>
      </thead>
      <tbody>
        {pathStorages.map((pathStorage) => (
          <PathStorageRow key={pathStorage.path} pathStorage={pathStorage} />
        ))}
      </tbody>
    </table>
  );
}

export default PathStorageTable;
