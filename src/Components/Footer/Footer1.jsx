import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Footer1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <footer className="footer-section" aria-label="Website Footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Column 1 - Logo + About */}
          <div className="footer-col">
            <img
              src="/1global1.png"
              alt="1 Global Enterprises Logo"
              className="footer-logo"
            />

            <p className="footer-text no-split">
              1 Global Enterprises Pte Ltd is a Singapore-headquartered business
              group with diversified interests spanning shipping, logistics and
              supply chain solutions, product distribution, renewable and clean
              energy, and global trading.
            </p>

            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/1-global-enterprises/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links" role="list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/activities">Business Verticals</a></li>
              <li><a href="/global-presence">Global Presence</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-text no-split">
              1 Global Enterprises Pte Ltd <br />
              #03-01, Keppel Distripark, <br />
              511 Kampong Bahru Road, <br />
              Singapore 099447
            </p>
            <p className="footer-text">
              <a className="footer-link" href="mailto:info@1ge.sg">info@1ge.sg</a>
            </p>
            <p className="footer-text">
              <a className="footer-link" href="tel:+6569080838">+65 69080838</a> <br />
              <a className="footer-link" href="tel:+6569080849">+65 69080849</a> <br />
              <a className="footer-link" href="tel:+6598177292">+65 98177292</a>
            </p>

            <div className="footer-tags">{/* optional chips */}</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© 1 Global Enterprises, All Rights Reserved.</p>
          <ul role="list">{/* legal links if needed */}</ul>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .footer-section {
          background: #000;
          position: relative;
          padding: 60px 0 30px;
          color: #fff;
        }
        .footer-section .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .footer-main {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }
        @media (max-width: 992px) {
          .footer-main { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-main { grid-template-columns: 1fr; }
        }
        .footer-col { padding: 0; }
        .footer-logo {
          max-height: 60px;
          margin-bottom: 16px;
        }
        .footer-heading {
          font-size: 20px;
          font-weight: 700;
          margin: 12px 0;
          color: #fff;
          text-wrap: balance;
        }
        .footer-text {
          color: #fff;
          opacity: 0.9;
          line-height: 1.7;
          margin: 0 0 12px 0;
          max-width: 560px; /* keeps line length like your screenshot */
        }
        /* prevent word splitting/truncation anywhere */
        .no-split {
          word-break: normal;
          overflow-wrap: normal;
          hyphens: none;
          white-space: normal;
        }
        .footer-social a {
          margin: 0 6px 0 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          border-radius: 50%;
          background: #111;
          color: #fff;
          transition: opacity .25s ease;
        }
        .footer-social a:hover { opacity: 0.8; }

        .footer-links { list-style: none; padding: 0; margin: 0; }
        .footer-links li { margin: 8px 0; }
        .footer-links a {
          color: #fff;
          text-decoration: none;
          opacity: 0.9;
          transition: opacity .25s ease;
        }
        .footer-links a:hover { opacity: 1; }

        .footer-link { color: #fff; text-decoration: none; opacity: 0.9; }
        .footer-link:hover { opacity: 1; }

        .footer-tags span {
          display: inline-block;
          margin: 6px 6px 0 0;
          padding: 5px 12px;
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
        }

        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.15);
          padding-top: 20px;
          font-size: 14px;
          color: #fff;
          opacity: 0.9;
          gap: 12px;
        }
        .footer-bottom ul {
          display: flex;
          gap: 16px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-bottom a { color: #fff; text-decoration: none; opacity: 0.9; }
        .footer-bottom a:hover { opacity: 1; }
      `}</style>
    </footer>
  );
};

export default Footer1;
