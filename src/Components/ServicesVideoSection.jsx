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
    <section className="svs-split">
      <div className="svs-container">
        {/* LEFT */}
        <div className="svs-left">
          <header className="svs-header">
            <p className="svs-sub">{subheading}</p>
            <h2 className="svs-title">{heading}</h2>
          </header>

          <div className="svs-list">
            {SERVICES.map(({ title, Icon }) => (
              <div className="svs-item" key={title}>
                <div className="svs-icon"><Icon strokeWidth={1.75} /></div>
                <div className="svs-item-title">{title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — video covers full column/section height */}
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
        .svs-split{
          background:#fff;
          padding:80px 0;
        }

        /* Shared frame height so both sides are equal; adjust to taste */
        .svs-container{
          --frame-h: clamp(480px, 50vw, 680px);
          display:grid;
          grid-template-columns: 1fr 1.15fr;  /* give the video a bit more width */
          align-items:stretch;                /* equal column heights */
          width:min(1400px, 94%);
          margin:0 auto;
          gap:64px;
          height:var(--frame-h);              /* full section height */
        }

        /* LEFT */
        .svs-left{
          display:flex;
          flex-direction:column;
          justify-content:center;
          height:100%;
        }
        .svs-header{ margin-bottom:18px; }
        .svs-sub{ margin:0 0 6px; font-size:1rem; color:#5f6b7a; }
        .svs-title{ margin:0; font-size:clamp(2rem,1.2rem + 2vw,3rem); font-weight:800; color:#0E0F2C; }
        .svs-list{ display:grid; gap:14px; margin-top:18px; }
        .svs-item{
          display:flex; align-items:center; gap:12px;
          padding:12px 16px; border:1px solid #e2e8f0; border-radius:12px;
          background:#f8fcff; transition:.2s ease;
        }
        .svs-item:hover{ transform:translateY(-2px); box-shadow:0 8px 18px rgba(10,40,80,.08); border-color:#c9e4f5; background:#f4fbff; }
        .svs-icon{ flex:0 0 42px; width:42px; height:42px; border-radius:10px; display:grid; place-items:center; background:rgba(38,182,224,.12); border:1px solid rgba(38,182,224,.35); color:#1c99bf; }
        .svs-icon svg{ width:22px; height:22px; }
        .svs-item-title{ font-weight:700; color:#0E0F2C; font-size:1rem; }

        /* RIGHT — video fills entire column */
        .svs-right{
          height:100%;
          display:flex; align-items:center; justify-content:center;
        }
        .svs-video-wrapper{
          position:relative;
          width:100%;
          height:100%;                /* fill full section height */
          border-radius:20px;
          overflow:hidden;
          background:#000;
          box-shadow:0 25px 60px rgba(0,0,0,.25);
        }
        .svs-video-wrapper video{
          position:absolute; inset:0;
          width:100%; height:100%;
          object-fit:cover;           /* COVER the whole area (may crop slightly) */
        }

        /* Mobile/Tablet — stack and keep a clean 16:9 */
        @media (max-width: 1024px){
          .svs-container{
            grid-template-columns:1fr;
            height:auto;
            gap:32px;
          }
          .svs-right{ order:-1; }
          .svs-video-wrapper{
            height:auto;
            aspect-ratio:16 / 9;       /* keep 16:9 when stacked */
            border-radius:12px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
