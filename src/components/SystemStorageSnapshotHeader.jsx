import React from "react";

function SystemStorageSnapshotHeader({ serverName, serverIp, snapshotTime }) {
  return (
    <div>
      <h3>Server:{serverName}</h3>
      <h3>IP:{serverIp}</h3>
      <h3>Time:{snapshotTime}</h3>
    </div>
  );
}

export default SystemStorageSnapshotHeader;
