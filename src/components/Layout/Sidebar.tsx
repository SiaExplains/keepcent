import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="et-sidebar">
      <ul>
        <li>
          <Link to="/">
            <i className="fa fa-home" /> Home
          </Link>
        </li>
        <li>
          <Link to="/category">
            <i className="fa fa-folder-open" /> Category
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fa fa-leaf" /> About Us
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fa fa-phone" /> Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
