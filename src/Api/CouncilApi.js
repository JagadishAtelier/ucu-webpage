import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/council`;


export const getCouncilCategoryWithAdvisoriesByTitle = async (title) => {
  const response = await axios.get(`${BASE_URL}/title/${title}`);
  return response.data;
};