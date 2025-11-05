// src/Components/About/About1.jsx
import React, { useEffect } from "react";
import { Users2, Globe2, BadgeCheck } from "lucide-react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const About1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="about-section bg-cover"
      style={{ padding: "80px 0", overflow: "hidden" }}
    >
      <style>{`
        :root {
          --accent:#26B6E0;
          --ink:#0E0F2C;
          --muted:#444;
        }

        .about-section {
          overflow-x: hidden;
          background: #fff;
          background-image: none !important;
        }

        .about-wrapper { width: 100%; }
        .about-row { display: flex; flex-wrap: wrap; }

        /* ===== Left image ===== */
        .about-image-col { padding-right: 16px; }
        .about-photo-wrap { width: 100%; display: flex; justify-content: center; align-items: center; }
        .about-photo {
          display: block; width: 100%; height: auto; object-fit: contain;
          border-radius: 12px; border: 2px solid #e6eef3;
          box-shadow: 0 8px 24px rgba(0,0,0,.08); background: #fff;
        }

        /* ===== Right column ===== */
        .about-text-col { padding-left: 16px; position: relative; z-index: 2; }
        .about-content .section-title h2 {
          margin-bottom: 16px; color: var(--ink);
          font-weight: 800; font-size: 34px; line-height: 1.15;
        }

        /* ===== Icon List ===== */
        .about-area { --icon-size: 58px; --gap: 18px; }
        .about-items {
          display: flex;
          align-items: center;
          gap: var(--gap);
          margin-bottom: 28px;
          position: relative;
        }

        .about-items:last-child { margin-bottom: 0; }

        .about-items .icon {
          flex-shrink: 0;
          width: var(--icon-size);
          height: var(--icon-size);
          border-radius: 50%;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(38,182,224,.35);
        }

        .about-items .icon svg {
          width: 26px;
          height: 26px;
          color: #fff;
        }

        .about-items .content { flex: 1; }
        .about-items .content h5 {
          font-weight: 800; margin: 0 0 6px;
          color: var(--ink); line-height: 1.2;
        }
        .about-items .content p {
          margin: 0; color: var(--muted);
          line-height: 1.6; font-size: 15.5px;
        }

        /* ===== Responsive layout ===== */
        @media (max-width: 1199px) {
          .about-row { flex-direction: column !important; }
          .about-image-col { order: 1 !important; padding-right: 0; }
          .about-text-col  { order: 2 !important; padding-left: 0; margin-top: 24px; }
          .about-content, .about-items .content { text-align: left; }
        }

        @media (max-width: 575px) {
          .about-content .section-title h2 { font-size: 26px; }
          .about-items { flex-direction: row; align-items: flex-start; }
          .about-items .icon { width: 52px; height: 52px; }
        }
      `}</style>

      <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="about-wrapper">
          <div className="row g-4 align-items-center mx-0 about-row">
            {/* Left Image */}
            <div className="col-12 col-xl-7 about-image-col d-flex">
              <div className="about-photo-wrap w-100">
                <img
                  src="/team1.jpg"
                  alt="1 Global Enterprises Team"
                  className="about-photo"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="col-12 col-xl-5 about-text-col">
              <div className="about-content pe-xl-4 ps-xl-2 px-3 px-xl-0">
                <div className="section-title">
                  <h2>1 Global Enterprises</h2>
                </div>

                <div className="about-area mt-3">
                  <div className="about-items">
                    <div className="icon"><Users2 /></div>
                    <div className="content">
                      <h5>Who We Are</h5>
                      <p>A diversified group with interests in Shipping, Logistics, Distribution, IT, Clean Energy &amp; Trading.</p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon"><Globe2 /></div>
                    <div className="content">
                      <h5>Our Reach</h5>
                      <p>A global workforce of 700+ professionals.</p>
                    </div>
                  </div>

                  <div className="about-items">
                    <div className="icon"><BadgeCheck /></div>
                    <div className="content">
                      <h5>Expertise</h5>
                      <p>Each business unit is led by experts ensuring sustainability, execution &amp; growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
