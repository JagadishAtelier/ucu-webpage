import axios from "axios";

// Fallback if VITE_API_BASE_URL is not set, though it should be.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}/admissionPage`
    : "http://localhost:5000/api/admissionPage";

export const getAdmissionPageData = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching admission page data:", error);
        return null;
    }
};

export const updateAdmissionPageData = async (data) => {
    try {
        const response = await axios.put(API_BASE_URL, data);
        return response.data;
    } catch (error) {
        console.error("Error updating admission page data:", error);
        throw error;
    }
};
