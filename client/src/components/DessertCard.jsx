import { useNavigate } from 'react-router-dom';

const DessertCard = ({ dessert }) => {
  const navigate = useNavigate();

  return (
    <div
      className="dessert-card card"
      onClick={() => navigate(`/desserts/${dessert.id}`)}
    >
      <h3>{dessert.name}</h3>
      <img src={dessert.img_url} alt={dessert.name} title={dessert.name} />
      <p>{dessert.flavor}</p>
    </div>
  );
};

export default DessertCard;
