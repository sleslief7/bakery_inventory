import { useLoaderData } from 'react-router-dom';
import DessertCard from '../DessertCard';

const DessertsPage = () => {
  const desserts = useLoaderData();

  return (
    <>
      <div id="desserts-page">
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
