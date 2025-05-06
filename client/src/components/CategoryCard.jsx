import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="category-card card"
        onClick={() => navigate(`/categories/${data.id}/desserts`)}
      >
        <h2>{data.name}</h2>
      </div>
    </>
  );
};

export default CategoryCard;
