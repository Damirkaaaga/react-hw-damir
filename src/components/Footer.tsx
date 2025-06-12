import React from "react";
import "./Footer.css";

type FooterLink = {
  title: string;
  items: string[];
};

const footerLinks: FooterLink[] = [
  {
    title: "Company",
    items: ["Home", "Order", "FAQ", "Contact"],
  },
  {
    title: "Template",
    items: ["Style Guide", "Changelog", "Licence", "Webflow University"],
  },
  {
    title: "Flowbase",
    items: ["More Cloneables"],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-block">
            <img src="src/public/Logo.svg" alt="logo" />
            <p className="footer-description">
              Takeaway & Delivery template
              <br />
              <span>for small - medium businesses.</span>
            </p>
          </div>

          {footerLinks.map(({ title, items }) => (
            <div className="footer-column" key={title}>
              <h4 className="footer-column-title">{title}</h4>
              <ul className="footer-list">
                {items.map((item) => (
                  <li className="footer-list-item" key={item}>
                    {title === "Template" ? (
                      <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        {item}
                      </a>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-line" />

        <div className="footer-bottom">
          <div className="footer-credits">
            <span>Built by</span>
            <span className="footer-link">Flowbase</span>
            <span>· Powered by</span>
            <span className="footer-link">Webflow</span>
          </div>

          <div className="footer-icons">
            <img src="src/public/icons/instagram.svg" alt="instagram" />
            <img src="src/public/icons/twitter.svg" alt="twitter" />
            <img src="src/public/icons/youtube.svg" alt="youtube" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
