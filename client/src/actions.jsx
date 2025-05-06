import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/api`;

export const createDessert = async (dessert) => {
  try {
    const response = await axios.post(`${API_URL}/desserts`, dessert);
    return response.data;
  } catch (error) {
    console.error('Error creating dessert:', error);
    throw error;
  }
};

export const updateDessert = async (dessert) => {
  try {
    const response = await axios.put(
      `${API_URL}/desserts/${dessert.id}`,
      dessert
    );
    return response.data;
  } catch (error) {
    console.error('Error creating dessert:', error);
    throw error;
  }
};

export const updateCategory = async (category) => {
  try {
    const res = await axios.put(
      `${API_URL}/categories/${category.id}`,
      category
    );
    return res.data;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

export const getDessert = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/desserts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching dessert:', error);
    throw error;
  }
};

export const dessertsByCategoryLoader = async ({ params }) => {
  try {
    const res = await axios.get(
      `${API_URL}/desserts/categories/${params.categoryId}`
    );
    return res.data;
  } catch (error) {
    console.error('Error fetching desserts by category:', error);
    throw error;
  }
};

export const dessertByIdLoader = async ({ params }) => {
  try {
    const res = await axios.get(`${API_URL}/desserts/${params.dessertId}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching dessert by ID:', error);
    throw error;
  }
};

export const categoriesLoader = async () => {
  try {
    const res = await axios.get(`${API_URL}/categories`);
    return res.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const categoriesWithDessertsLoader = async ({ params }) => {
  try {
    const categoryRes = await axios.get(
      `${API_URL}/categories/${params.categoryId}`
    );
    const dessertsRes = await axios.get(
      `${API_URL}/desserts/categories/${params.categoryId}`
    );
    return { category: categoryRes.data, desserts: dessertsRes.data };
  } catch (error) {
    console.error('Error fetching categories with desserts:', error);
    throw error;
  }
};

export const deleteDessert = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/desserts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting dessert:', error);
    throw error;
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};
