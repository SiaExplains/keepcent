import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from 'react-router-dom';
import ColoredLogo, { LogoSizes } from '../ColoredLogo';

const FooterCopyrightComponent = () => {
  return (
    <div className="copyright-container">
      <div className="copyright-item">
        <ColoredLogo size={LogoSizes.Large} color="#476b8a" bkcolor="white" />
        <div className="copyright-text">
          Copyrights &copy; 2022 <br />
          All rights reserved.
        </div>
      </div>
    </div>
  );
};

const FooterLinkComponent = () => {
  return (
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
      <a href="https://github.com/SiaQnbr/keepcent" target="_blank">
        GitHub
      </a>
      <Link to="/sitemap">SiteMap</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

const FooterSocialComponent = () => {
  return (
    <div className="social">
      <p>
        KeepCent is a simple playground app for developing a personal budget application. KeepCent
        will help us to track all expenses and make a history of them.
      </p>
      <div className="social-logos">
        <a href="https://www.facebook.com/profile.php?id=100085372579460" target="_blank">
          <img src="/socials/facebook.png" />
        </a>
        <a href="https://instagram.com/keepcent" target="_blank">
          <img src="/socials/instagram.png" />
        </a>
        <a href="https://twitter.com/keepcent" target="_blank">
          <img src="/socials/twitter.png" />
        </a>
        <a href="https://www.youtube.com/channel/UCoVgwe9qJqx5P33JhGInX2g" target="_blank">
          <img src="/socials/youtube.png" />
        </a>
        <a href="https://t.me/keepcent" target="_blank">
          <img src="/socials/telegram.png" />
        </a>
      </div>
    </div>
  );
};

const FooterContactComponent = () => {
  return (
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
  );
};

const Footer = () => {
  return (
    <>
      <BrowserView>
        <div className="et-footer">
          <FooterCopyrightComponent />
          <FooterLinkComponent />
          <FooterSocialComponent />
          <FooterContactComponent />
        </div>
      </BrowserView>
      <MobileView>
        <div className="et-footer">
          <FooterLinkComponent />
          <FooterSocialComponent />
          <div className="copyright-contact-container">
            <FooterCopyrightComponent />
            <FooterContactComponent />
          </div>
        </div>
      </MobileView>
    </>
  );
};

export default Footer;
