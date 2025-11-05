import React from "react";
import { Workflow, Droplets, Sun } from "lucide-react";

const SERVICES = [
  { title: "Supply Chain Solutions", Icon: Workflow },
  { title: "Renewable Energy", Icon: Sun },
  { title: "Product Distribution", Icon: Droplets },
];

const ServicesVideoSection = ({
  videoSrc = "/video.mp4",
  heading = "Business Verticals",
  subheading = "Integrated solutions powered by people, technology, and purpose",
}) => {
  return (
    <section className="svs-section">
      <div className="svs-container">
        {/* LEFT CONTENT */}
        <div className="svs-left">
          <header className="svs-header">
            <p className="svs-sub">{subheading}</p>
            <h2 className="svs-title">{heading}</h2>
          </header>

          <div className="svs-list">
            {SERVICES.map(({ title, Icon }) => (
              <div className="svs-item" key={title}>
                <div className="svs-icon">
                  <Icon strokeWidth={1.75} />
                </div>
                <div className="svs-item-title">{title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div className="svs-right">
          <div className="svs-video">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Services video"
            />
          </div>
        </div>
      </div>

      <style>{`
        /* Base Section */
        .svs-section {
          background: #fff;
          padding: 80px 0;
        }

        .svs-container {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          width: min(1400px, 94%);
          margin: 0 auto;
          align-items: center;
          gap: 60px;
        }

        /* LEFT SIDE */
        .svs-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .svs-header {
          margin-bottom: 20px;
        }

        .svs-sub {
          margin: 0 0 6px;
          font-size: 1rem;
          color: #5f6b7a;
          line-height: 1.5;
        }

        .svs-title {
          margin: 0;
          font-size: clamp(2rem, 1.2rem + 2vw, 2.8rem);
          font-weight: 800;
          color: #0E0F2C;
          line-height: 1.2;
        }

        .svs-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 24px;
        }

        .svs-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #f8fcff;
          transition: all 0.25s ease;
        }

        .svs-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(10, 40, 80, 0.08);
          border-color: #c9e4f5;
          background: #f4fbff;
        }

        .svs-icon {
          flex: 0 0 42px;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: rgba(38, 182, 224, 0.12);
          border: 1px solid rgba(38, 182, 224, 0.35);
          color: #1c99bf;
        }

        .svs-icon svg {
          width: 22px;
          height: 22px;
        }

        .svs-item-title {
          font-weight: 700;
          color: #0E0F2C;
          font-size: 1rem;
          line-height: 1.4;
        }

        /* RIGHT SIDE — full 16:9 video */
        .svs-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .svs-video {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9; /* maintain perfect rectangle */
          border-radius: 20px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
        }

        .svs-video video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover; /* fills entire rectangle */
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .svs-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .svs-right {
            order: -1;
          }

          .svs-video {
            aspect-ratio: 16 / 9;
            border-radius: 12px;
          }

          .svs-left {
            text-align: center;
            align-items: center;
          }

          .svs-list {
            max-width: 400px;
          }
        }

        @media (max-width: 640px) {
          .svs-section {
            padding: 50px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
