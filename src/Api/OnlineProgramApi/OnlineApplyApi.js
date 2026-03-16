import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/onlineApply`;



// ✅ Get all banners
export const getAllWorkflows = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};
