import React from "react";

function SystemStorageSnapshotHeader({ serverName, snapshotTime }) {
  return (
<div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
  <div className="flex items-center justify-between">
    <h3 className="text-sm font-semibold text-slate-900">
      Server: <span className="font-normal text-slate-700">{serverName}</span>
    </h3>
    <span className="text-xs text-slate-500">
      {snapshotTime}
    </span>
  </div>
</div>

  );
}

export default SystemStorageSnapshotHeader;
