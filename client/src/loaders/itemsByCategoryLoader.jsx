import axios from 'axios';

const itemsByCategoryLoader = async ({ params }) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/items/categories/${params.categoryId}`
  );
  return res.data;
};

export default itemsByCategoryLoader;
