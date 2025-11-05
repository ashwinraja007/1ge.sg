import React, { useEffect, useRef, useState } from "react";
import { Workflow, Droplets, Code2, Sun } from "lucide-react";

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
  const leftRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState("auto");

  useEffect(() => {
    const updateHeight = () => {
      if (leftRef.current) {
        const height = leftRef.current.getBoundingClientRect().height;
        setSectionHeight(`${height}px`);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className="svs-split">
      <div className="svs-container">
        {/* LEFT COLUMN */}
        <div className="svs-left" ref={leftRef}>
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

        {/* RIGHT COLUMN — fills half (equal to text) */}
        <div className="svs-right">
          <div className="svs-video-wrapper">
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
        .svs-split {
          background: #fff;
          padding: 40px 0; /* some breathing room around the fixed frame */
          overflow: hidden;
        }

        .svs-container {
          display: grid;
          grid-template-columns: 1fr 1fr;          /* equal columns */
          width: min(1024px, 94%);                 /* fixed desktop width target */
          height: 600px;                            /* fixed desktop height target */
          margin: 0 auto;
          align-items: stretch;                     /* ensure both sides equal height */
          gap: 28px;
        }

        /* LEFT SIDE */
        .svs-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 12px;                       /* internal padding so text doesn't hug edges */
        }

        .svs-header { margin-bottom: 12px; }
        .svs-sub { margin: 0 0 6px; font-size: .95rem; color: #5f6b7a; }
        .svs-title { margin: 0; font-size: clamp(1.8rem, 1.2rem + 2vw, 2.6rem); font-weight: 800; color: #0E0F2C; }

        .svs-list { display: grid; gap: 10px; margin-top: 14px; }
        .svs-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background: #f8fcff;
          transition: all .2s ease;
        }
        .svs-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(10,40,80,.08);
          border-color: #c9e4f5;
          background: #f4fbff;
        }
        .svs-icon {
          flex: 0 0 40px;
          width: 40px; height: 40px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: rgba(38,182,224,.12);
          border: 1px solid rgba(38,182,224,.35);
          color: #1c99bf;
        }
        .svs-icon svg { width: 20px; height: 20px; }
        .svs-item-title { font-weight: 700; color: #0E0F2C; font-size: 1rem; line-height: 1.4; }

        /* RIGHT SIDE — fills entire half and matches 600px height */
        .svs-right {
          position: relative;
          width: 100%;
          height: 100%;                             /* fill the 600px frame */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .svs-video-wrapper {
          position: relative;
          width: 100%;
          height: 100%;                              /* equal to text (600px on desktop) */
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(14, 24, 44, 0.25);
          background: #000;
        }

        .svs-video-wrapper video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;                         /* fill 512×600 half without letterboxing */
          border: none;
          display: block;
          background: transparent;
        }

        /* TABLET & BELOW — responsive stack with 16:9 video */
        @media (max-width: 1023.98px) {
          .svs-container {
            grid-template-columns: 1fr;
            width: min(94%, 800px);
            height: auto;                            /* no fixed height on small screens */
            gap: 20px;
          }
          .svs-right { order: -1; height: auto; }
          .svs-video-wrapper {
            height: auto;
            aspect-ratio: 16 / 9;
            border-radius: 12px;
            box-shadow: 0 12px 28px rgba(0,0,0,.15);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
