import { Link } from 'react-router-dom';

const DesktopNavigation = () => {
  return (
    <div className="et-navigation__parent">
      <div className="et-navigation__child">
        <ul className="et-navigation__desktop">
          <li className="et-nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="et-nav-item">
            <Link to="/category">Category</Link>
          </li>
          <li className="et-nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="et-nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="et-nav-item">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavigation;
