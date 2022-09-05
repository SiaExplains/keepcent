import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="et-footer">
      Copyrights &copy; 2022 | <Link to="/terms">Terms of use</Link>
    </div>
  );
};

export default Footer;
