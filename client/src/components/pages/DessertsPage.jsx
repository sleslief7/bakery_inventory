import { useLoaderData } from 'react-router-dom';
import DessertCard from '../DessertCard';
import { useState } from 'react';
import { updateCategory } from '../../actions';

const EditableLabel = ({ category, setCategory }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = async (e) => {
    e.preventDefault();
    const updatedCategory = await updateCategory({
      ...category,
      name: e.target.value,
    });
    setCategory(updatedCategory);
    setIsEditing(!isEditing);
  };

  return (
    <>
      {isEditing ? (
        <input type="text" defaultValue={category.name} onBlur={handleEdit} />
      ) : (
        <h2>{category.name}</h2>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>edit</button>
    </>
  );
};

const DessertsPage = () => {
  const { category: loaderCategory, desserts } = useLoaderData();
  const [category, setCategory] = useState(loaderCategory);

  return (
    <>
      <div id="desserts-page">
        <EditableLabel category={category} setCategory={setCategory} />
        <div className="card-container">
          {desserts.map((dessert) => (
            <DessertCard dessert={dessert} key={`dessert-${dessert.id}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DessertsPage;
