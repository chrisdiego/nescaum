import { API_URL } from "../constants/constants"

const getResourceByTitle = async (title) => {
  const url = `${API_URL}/assets/documents?filter=[title:contains]=${title}`;

  const response = await fetch(url); 

  return response.json(); 
}

export {
  getResourceByTitle
}