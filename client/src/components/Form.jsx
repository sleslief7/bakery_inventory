import axios from 'axios';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Form = ({ item }) => {
  const initialState = {
    name: '',
    flavor: '',
    img_url: '',
    category: '',
  };
  const [dessert, setDessert] = useState(initialState);
  const navigate = useNavigate();
  const categories = useLoaderData();

  if (item) {
    setDessert({
      name: item.name,
      flavor: item.flavor,
      img_url: item.img_url,
      category: item.category_id,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${import.meta.env.VITE_API_URL}/api/items`, {
      name: dessert.name,
      flavor: dessert.flavor,
      img_url: dessert.img_url,
      category_id: dessert.category,
    });
    setDessert(initialState);
    navigate(`/items/${dessert.category}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={dessert.name}
        required
        onChange={(e) => setDessert({ ...dessert, name: e.target.value })}
      />
      <label htmlFor="flavor">Flavor:</label>
      <input
        type="text"
        id="flavor"
        name="flavor"
        value={dessert.flavor}
        required
        onChange={(e) => setDessert({ ...dessert, flavor: e.target.value })}
      />
      <label htmlFor="img_url">Image URL: </label>
      <input
        type="text"
        id="img_url"
        name="img_url"
        value={dessert.img_url}
        required
        onChange={(e) => setDessert({ ...dessert, img_url: e.target.value })}
      />
      <select
        name="category"
        id="category"
        selected={dessert.category}
        onChange={(e) => setDessert({ ...dessert, category: e.target.value })}
      >
        {categories.map((category) => (
          <option key={`select-category-${category.id}`} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Dessert</button>
    </form>
  );
};

export default Form;
