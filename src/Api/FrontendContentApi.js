import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const getFrontendPageContent = async (pageKey) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/frontend-content/public/${pageKey}`);
    return response.data || null;
  } catch (error) {
    console.error(`Error fetching page content for ${pageKey}:`, error);
    return null;
  }
};
