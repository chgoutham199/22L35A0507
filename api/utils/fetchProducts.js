import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test/companies';
const AUTH_URL = 'http://20.244.56.144/test/auth';
const AUTH_BODY = {
  companyName: "VignanMart",
  clientID: "e2472f6f-907d-4a39-852d-7b6c3700128c",
  clientSecret: "rDqqllinrkyqeFIY",
  ownerName: "Goutham",
  ownerEmail: "chittinenigoutham@gmail.com",
  rollNo: "22L35A0507"
};

const fetchToken = async () => {
  const response = await axios.post(AUTH_URL, AUTH_BODY);
  return response.data.access_token;
};

const fetchProducts = async (company, category, minPrice, maxPrice, top=10) => {
  const token = await fetchToken();
  const response = await axios.get(`${BASE_URL}/${company}/categories/${category}/products`, {
    params: { top, minPrice, maxPrice },
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};

export default fetchProducts;