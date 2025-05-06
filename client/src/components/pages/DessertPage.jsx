import { useLoaderData, useNavigate } from 'react-router-dom';

const DessertPage = () => {
  const dessert = useLoaderData();
  const navigate = useNavigate();
  return (
    <div id="dessert-page">
      <h2>{dessert.name}</h2>
      <img src={dessert.img_url} alt={dessert.name} title={dessert.name} />
      <p>{dessert.flavor}</p>
      <button
        className="update-btn"
        onClick={() =>
          navigate(
            `/categories/${dessert.category_id}/desserts/${dessert.id}/edit`
          )
        }
      >
        Update
      </button>
    </div>
  );
};

export default DessertPage;
