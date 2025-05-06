import { useParams } from 'react-router-dom';
import DessertForm from '../DessertForm';
import { getDessert } from '../../actions';
import { useEffect, useState } from 'react';

const EditDessertPage = () => {
  const [dessert, setDessert] = useState({});
  const { dessertId } = useParams();

  useEffect(() => {
    const fetchDessert = async () => {
      const dessertData = await getDessert(dessertId);
      setDessert(dessertData);
    };
    fetchDessert();
  }, [dessertId]);
  return (
    <div>
      <DessertForm item={dessert} />
    </div>
  );
};

export default EditDessertPage;
