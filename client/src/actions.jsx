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
    const response = await axios.put(`${API_URL}/desserts`, dessert);
    return response.data;
  } catch (error) {
    console.error('Error creating dessert:', error);
    throw error;
  }
};
