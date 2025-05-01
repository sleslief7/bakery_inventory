import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import CategoriesPage from './components/pages/CategoriesPage';
import './style.css';

function App() {
  return (
    <>
      <Header />
      <div id="outlet">
        <Outlet />
      </div>
    </>
  );
}

export default App;
