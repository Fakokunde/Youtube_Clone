import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'fbe670e00cmsh6f84e66dfb9d825p1986ffjsnf1a69572061f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
const {data} = await axios.get(`${BASE_URL}/${url}`, options);
return data;
}
