import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/fulltimeprograms`;

export async function getProgramContent(id) {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
}

export function getTabSections(program, tabName) {
  return (
    program?.tabs?.find(
      (tab) => tab.tabName?.toLowerCase() === tabName.toLowerCase()
    )?.sections || []
  );
}
