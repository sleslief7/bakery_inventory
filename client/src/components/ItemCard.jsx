import { useNavigate } from 'react-router-dom';

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="item-card card"
      onClick={() => navigate(`/item/${item.id}`)}
    >
      <h3>{item.name}</h3>
      <img src={item.img_url} alt={item.name} title={item.name} />
      <p>{item.flavor}</p>
    </div>
  );
};

export default ItemCard;
