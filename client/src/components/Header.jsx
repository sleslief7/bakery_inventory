import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div id="header" onClick={() => navigate('/')}>
      <h1>Bakery Inventory</h1>
    </div>
  );
};

export default Header;
