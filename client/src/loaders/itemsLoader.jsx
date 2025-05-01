import axios from 'axios';

export const itemsByCategoryLoader = async ({ params }) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/items/categories/${params.categoryId}`
  );
  return res.data;
};

export const itemByIdLoader = async ({ params }) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/items/${params.itemId}`
  );
  return res.data;
};
