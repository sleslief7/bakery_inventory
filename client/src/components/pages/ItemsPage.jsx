import { useLoaderData } from 'react-router-dom';
import ItemCard from '../ItemCard';

const ItemsPage = () => {
  const items = useLoaderData();

  return (
    <>
      <div id="items-page">
        {items.map((item) => (
          <ItemCard item={item} key={`item-${item.id}`} />
        ))}
      </div>
    </>
  );
};

export default ItemsPage;
