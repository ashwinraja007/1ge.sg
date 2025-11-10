import React, { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Footer1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <footer className="footer-section" aria-label="Website Footer">
      <div className="container">
        <div className="footer-main">
          {/* Column 1 - Logo + About */}
          <div className="footer-col">
            <img src="/1global1.png" alt="1 Global Enterprises Logo" className="footer-logo" />

            <p className="footer-text">
              1 Global Enterprises Pte Ltd is a{" "}
              <span className="nowrap">Singapore&#8209;headquartered</span> business group with
              diversified interests spanning shipping, logistics and supply chain solutions, product
              distribution, renewable and clean energy, and global trading.
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
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/activities">Business Verticals</a></li>
              <li><a href="/global-presence">Global Presence</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-text">
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
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 1 Global Enterprises, All Rights Reserved.</p>
        </div>
      </div>

      <style>{`
        .footer-section { background:#000; padding:60px 0 30px; color:#fff; }
        .container { max-width:1200px; margin:0 auto; padding:0 16px; }
        .footer-main { display:grid; grid-template-columns:1.2fr 0.8fr 1fr; gap:40px; margin-bottom:40px; }
        @media (max-width:992px){ .footer-main{ grid-template-columns:1fr 1fr; gap:32px; } }
        @media (max-width:700px){ .footer-main{ grid-template-columns:1fr; gap:24px; } }
        .footer-col{ min-width:0; }
        .footer-logo{ max-height:60px; margin-bottom:16px; }
        .footer-heading{ font-size:20px; font-weight:700; margin:12px 0; color:#fff; }
        .footer-text{ color:#fff; opacity:.9; line-height:1.7; margin-bottom:12px; overflow-wrap:break-word; hyphens:none; }
        .nowrap{ white-space:nowrap; }  /* <- prevents any break in the phrase */
        .footer-links{ list-style:none; padding:0; margin:0; }
        .footer-links li{ margin:8px 0; }
        .footer-links a, .footer-link{ color:#fff; text-decoration:none; opacity:.9; }
        .footer-links a:hover, .footer-link:hover{ opacity:1; }
        .footer-social a{ display:inline-flex; align-items:center; justify-content:center; width:38px; height:38px; border-radius:50%; background:#111; color:#fff; margin-right:6px; transition:opacity .25s; }
        .footer-social a:hover{ opacity:.8; }
        .footer-bottom{ border-top:1px solid rgba(255,255,255,.15); padding-top:20px; font-size:14px; opacity:.9; text-align:center; }
      `}</style>
    </footer>
  );
};

export default Footer1;
