import { useState } from "react";
import systemStorageSnapshot from "../data/systemStorageSnapshot";
import SystemStorageSnapshotCard from "../components/SystemStorageSnapshotCard";

function SystemStorageMonitoringPage() {
  return (
    <div>
      <SystemStorageSnapshotCard
        serverName={systemStorageSnapshot.serverName}
        serverIp={systemStorageSnapshot.serverIp}
        snapshotTime={systemStorageSnapshot.snapshotTime}
        pathStorages={systemStorageSnapshot.pathStorages}
      ></SystemStorageSnapshotCard>
    </div>
  );
}

export default SystemStorageMonitoringPage;
