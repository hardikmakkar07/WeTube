import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "8f506e97ddmsh3b4b128f4c7061dp1f4d1fjsn9cd5e5be914d",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
