import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="products">
        <button>Shop</button>
      </Link>
      <button>Cart</button>
    </nav>
  );
};

export default NavBar;
