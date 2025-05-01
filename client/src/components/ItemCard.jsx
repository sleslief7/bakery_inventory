const ItemCard = ({ item }) => {
  return (
    <div className="item-card card">
      <h3>{item.name}</h3>
      <img src={item.img_url} alt={item.name} title={item.name} />
      <p>{item.flavor}</p>
    </div>
  );
};

export default ItemCard;
