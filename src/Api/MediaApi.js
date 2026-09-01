import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const getBannerByBreadcrumb = async (breadcrumb) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/mediaBanner/breadcrumb/${breadcrumb}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching banner for ${breadcrumb}:`, error);
    return { success: false, data: null };
  }
};

export const getMediaByGridHead = async (gridHead) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/media/${gridHead}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching media list for ${gridHead}:`, error);
    return { success: false, data: null };
  }
};
