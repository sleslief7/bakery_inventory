import { useParams, useNavigate } from 'react-router-dom';
import DessertForm from '../DessertForm';
import { getDessert, deleteDessert } from '../../actions';
import { useEffect, useState } from 'react';

const EditDessertPage = () => {
  const [dessert, setDessert] = useState({});
  const { dessertId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDessert = async () => {
      const dessertData = await getDessert(dessertId);
      setDessert(dessertData);
    };
    fetchDessert();
  }, [dessertId]);

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDessert(dessertId);
    navigate(`/categories/${dessert.category_id}/desserts`);
  };
  return (
    <div>
      <DessertForm item={dessert} />
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default EditDessertPage;
