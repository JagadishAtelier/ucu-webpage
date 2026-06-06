import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  ? `${import.meta.env.VITE_API_BASE_URL}/mdps`
  : "http://localhost:5000/api/mdps";

export const getMDPsData = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data?.data?.[0] || null;
  } catch (error) {
    console.error("Error fetching MDPs data:", error);
    return null;
  }
};
