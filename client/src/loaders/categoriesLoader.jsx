import axios from 'axios';

export const categoriesLoader = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/categories`);
  return res.data;
};
