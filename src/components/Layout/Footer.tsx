import { Link } from 'react-router-dom';
import ColoredLogo, { LogoSizes } from '../ColoredLogo';

const Footer = () => {
  return (
    <div className="et-footer">
      <div className="copyright">
        {/* <img src="/white-logo.png" /> */}
        <ColoredLogo size={LogoSizes.Large} color="#476b8a" bkcolor="white" />
        <div className="copyright-text">
          Copyrights &copy; 2022 <br />
          All rights reserved.
        </div>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/news">News</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms of Use</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/github">GitHub</Link>
        <Link to="/sitemap">SiteMap</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="social"></div>
      <div className="contact"></div>
    </div>
  );
};

export default Footer;
