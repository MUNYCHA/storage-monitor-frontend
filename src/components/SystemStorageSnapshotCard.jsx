import React from "react";
import SystemStorageSnapshotHeader from "./SystemStorageSnapshotHeader";
import PathStorageTable from "./PathStorageTable";

function SystemStorageSnapshotCard({
  serverName,
  serverIp,
  snapshotTime,
  pathStorages,
}) {
  return (
    <div>
      <SystemStorageSnapshotHeader
        serverName={serverName}
        serverIp={serverIp}
        snapshotTime={snapshotTime}
      ></SystemStorageSnapshotHeader>

      <PathStorageTable pathStorages={pathStorages}></PathStorageTable>
    </div>
  );
}

export default SystemStorageSnapshotCard;
