import { useNavigate, useMatch } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isHomePage = useMatch('/');
  const isCategoriesPage = useMatch('/categories/:id/desserts');

  const handleAddCategory = () => {
    const destination = isHomePage ? '/categories/new' : '/desserts/new';
    navigate(destination);
  };

  return (
    <div id="header">
      <h1 onClick={() => navigate('/')}>Bakery Inventory</h1>
      {(isHomePage || isCategoriesPage) && (
        <button className="add-btn" onClick={handleAddCategory}>
          +
        </button>
      )}
    </div>
  );
};

export default Header;
