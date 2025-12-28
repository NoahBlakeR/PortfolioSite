import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ onClick }) => (
  <Link className="logo" to="/" onClick={onClick}>
    Noah B.
  </Link>
);

export default Logo;
