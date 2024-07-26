import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test/companies';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxOTcxNTA2LCJpYXQiOjE3MjE5NzEyMDYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUyNDcyZjZmLTkwN2QtNGEzOS04NTJkLTdiNmMzNzAwMTI4YyIsInN1YiI6ImNoaXR0aW5lbmlnb3V0aGFtQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IlZpZ25hbk1hcnQiLCJjbGllbnRJRCI6ImUyNDcyZjZmLTkwN2QtNGEzOS04NTJkLTdiNmMzNzAwMTI4YyIsImNsaWVudFNlY3JldCI6InJEcXFsbGlucmt5cWVGSVkiLCJvd25lck5hbWUiOiJHb3V0aGFtIiwib3duZXJFbWFpbCI6ImNoaXR0aW5lbmlnb3V0aGFtQGdtYWlsLmNvbSIsInJvbGxObyI6IjIyTDM1QTA1MDcifQ.CAzm2bFaRFK2iHmaQxmaxgr8GSJNWJdnV-fVc-FmpRA';

const fetchProducts = async (company, category, minPrice, maxPrice, top) => {
  const response = await axios.get(`${BASE_URL}/${company}/categories/${category}/products`, {
    params: { top, minPrice, maxPrice },
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    }
  });
  return response.data;
};

export default fetchProducts;