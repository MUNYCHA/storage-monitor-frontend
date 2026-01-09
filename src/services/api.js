const BASE_URL = "http://localhost:8080";

export const fetchLatestServerStorageUsages = async () => {
  const response = await fetch(
    `${BASE_URL}/api/server-storage-usage/latest`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
