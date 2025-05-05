import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoriesForm = () => {
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${import.meta.env.VITE_API_URL}/api/categories`, {
      name: category,
    });
    setCategory('');
    navigate('/');
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="category">Category: </label>
      <input
        type="text"
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoriesForm;
