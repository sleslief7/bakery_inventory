import CategoryCard from '../CategoryCard';
import { useLoaderData } from 'react-router-dom';

const CategoriesPage = () => {
  const categories = useLoaderData();

  return (
    <div id="categories-page">
      <div className="card-container">
        {categories.map((category) => {
          return (
            <CategoryCard data={category} key={`category-${category.id}`} />
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesPage;
