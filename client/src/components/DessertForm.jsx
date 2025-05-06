import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { createDessert, updateDessert } from '../actions';

const DessertForm = ({ item }) => {
  const [dessert, setDessert] = useState(item ?? {});
  const navigate = useNavigate();
  const categories = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dessert.id) {
      await updateDessert(dessert);
    } else {
      await createDessert(dessert);
    }
    navigate(`/desserts/${dessert.category_id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={dessert?.name ?? ''}
        required
        onChange={(e) => setDessert({ ...dessert, name: e.target.value })}
      />
      <label htmlFor="flavor">Flavor:</label>
      <input
        type="text"
        id="flavor"
        name="flavor"
        value={dessert?.flavor ?? ''}
        required
        onChange={(e) => setDessert({ ...dessert, flavor: e.target.value })}
      />
      <label htmlFor="img_url">Image URL: </label>
      <input
        type="text"
        id="img_url"
        name="img_url"
        value={dessert?.img_url ?? ''}
        required
        onChange={(e) => setDessert({ ...dessert, img_url: e.target.value })}
      />
      <select
        name="category_id"
        id="category_id"
        selected={dessert?.category_id ?? ''}
        onChange={(e) =>
          setDessert({ ...dessert, category_id: e.target.value })
        }
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

export default DessertForm;
