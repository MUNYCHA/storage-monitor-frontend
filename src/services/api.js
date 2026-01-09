
export const fetchLatestServerStorageUsages = async () => {
  const response = await fetch(
    `/api/server-storage-usage/latest`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
