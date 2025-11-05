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
        {/* LEFT: matches the video height */}
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

        {/* RIGHT: rectangular 16:9 video */}
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
          background:#fff;
          padding:60px 0;
        }

        /* Shared frame height for BOTH columns (equal heights) */
        .svs-container {
          --frame-h: clamp(360px, 42vw, 600px);   /* small on small, big on big */
          display:grid;
          grid-template-columns: 1fr 1fr;
          align-items:stretch;                    /* both columns same height */
          width:min(1200px, 94%);
          margin:0 auto;
          gap:42px;
          height: var(--frame-h);                 /* lock equal height */
        }

        /* LEFT */
        .svs-left{
          display:flex;
          flex-direction:column;
          justify-content:center;                 /* center content within the frame */
          height:100%;
          padding:8px 6px;
        }

        .svs-header{ margin-bottom:14px; }
        .svs-sub{ margin:0 0 6px; font-size:.95rem; color:#5f6b7a; }
        .svs-title{ margin:0; font-size:clamp(1.8rem,1.2rem + 2vw,2.6rem); font-weight:800; color:#0E0F2C; }

        .svs-list{ display:grid; gap:10px; margin-top:12px; }
        .svs-item{
          display:flex; align-items:center; gap:10px;
          padding:10px 14px; border:1px solid #e2e8f0; border-radius:10px;
          background:#f8fcff; transition:.2s ease;
        }
        .svs-item:hover{ transform:translateY(-2px); box-shadow:0 8px 18px rgba(10,40,80,.08); border-color:#c9e4f5; background:#f4fbff; }
        .svs-icon{ flex:0 0 40px; width:40px; height:40px; border-radius:8px; display:grid; place-items:center; background:rgba(38,182,224,.12); border:1px solid rgba(38,182,224,.35); color:#1c99bf; }
        .svs-icon svg{ width:20px; height:20px; }
        .svs-item-title{ font-weight:700; color:#0E0F2C; font-size:1rem; }

        /* RIGHT — 16:9 rectangle that fills the frame height */
        .svs-right{
          display:flex; align-items:center; justify-content:center;
          height:100%;
        }
        .svs-video-wrapper{
          height:100%;                 /* match shared frame height */
          aspect-ratio:16 / 9;         /* keep a perfect rectangle 16:9 */
          max-width:100%;              /* don't overflow column */
          border-radius:20px;
          overflow:hidden;
          box-shadow:0 20px 50px rgba(14,24,44,.25);
          background:#000;
        }
        .svs-video-wrapper video{
          position:absolute; inset:0;
          width:100%; height:100%;
          object-fit:cover;
        }

        /* MOBILE/TABLET — stack, video stays 16:9 and scales down */
        @media (max-width: 992px){
          .svs-container{
            grid-template-columns:1fr;
            height:auto;               /* let content size naturally */
            gap:24px;
          }
          .svs-right{ order:-1; height:auto; }
          .svs-video-wrapper{
            height:auto;
            width:100%;
            aspect-ratio:16 / 9;
            border-radius:12px;
            box-shadow:0 12px 28px rgba(0,0,0,.15);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
