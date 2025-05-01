import { useLoaderData } from 'react-router-dom';

const ItemPage = () => {
  const item = useLoaderData();
  return (
    <div id="item-page">
      <h2>{item.name}</h2>
      <img src={item.img_url} alt={item.name} title={item.name} />
      <p>{item.flavor}</p>
      <button className="update-btn">Update</button>
    </div>
  );
};

export default ItemPage;
