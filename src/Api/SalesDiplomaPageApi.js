import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/sales-diploma-page`;

export const getSalesDiplomaPage = async () => {
  const response = await axios.get(BASE_URL);
  return response.data?.data;
};
