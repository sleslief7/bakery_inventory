import axios from 'axios';

export const dessertsByCategoryLoader = async ({ params }) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/desserts/categories/${
      params.categoryId
    }`
  );
  return res.data;
};

export const dessertByIdLoader = async ({ params }) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/desserts/${params.dessertId}`
  );
  return res.data;
};
