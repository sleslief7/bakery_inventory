import { useLoaderData } from 'react-router-dom';

const DessertPage = () => {
  const dessert = useLoaderData();
  return (
    <div id="dessert-page">
      <h2>{dessert.name}</h2>
      <img src={dessert.img_url} alt={dessert.name} title={dessert.name} />
      <p>{dessert.flavor}</p>
      <button className="update-btn">Update</button>
    </div>
  );
};

export default DessertPage;
