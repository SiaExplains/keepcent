import { Link } from 'react-router-dom';
import ColoredLogo, { LogoSizes } from '../ColoredLogo';

const Footer = () => {
  return (
    <div className="et-footer">
      <div className="copyright-container">
        <div className="copyright-item">
          <ColoredLogo size={LogoSizes.Large} color="#476b8a" bkcolor="white" />
          <div className="copyright-text">
            Copyrights &copy; 2022 <br />
            All rights reserved.
          </div>
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
      <div className="social">
        <p>
          KeepCent is a simple playground app for developing a personal budget application. KeepCent
          will help us to track all expenses and make a history of them.
        </p>
        <div className="social-logos">
          <img src="/socials/facebook.png" />
          <img src="/socials/instagram.png" />
          <a href="https://twitter.com/keepcent" target="_blank">
            <img src="/socials/twitter.png" />
          </a>
          <img src="/socials/youtube.png" />
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-item">
          <div>
            <i className="fa fa-mobile" />
            &nbsp;<a href="tel:+123-456-910">+123-456-910</a>
          </div>
          <div>
            <i className="fa fa-phone" />
            &nbsp;<a href="tel:+123-456-910">+123-456-910</a>
          </div>
          <div>
            <i className="fa fa-envelope" />
            &nbsp;<a href="mailto:keepcent@gmail.com">keepcent@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
