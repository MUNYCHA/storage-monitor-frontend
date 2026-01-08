const BASE_URL = "http://192.168.60.137:4141";

export const fetchLatestSystemStorageUsages = async () => {
  const response = await fetch(
    `${BASE_URL}/api/system-storage-snapshot/latest`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
