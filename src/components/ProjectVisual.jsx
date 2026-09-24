import React from "react";

export default function ProjectVisual({ type, title }) {
  if (type === "ar") {
    return (
      <div className="project-visual project-visual-ar" aria-label={title}>
        <div className="ar-grid" />
        <div className="ar-machine">
          <span className="machine-top" />
          <span className="machine-body" />
          <span className="machine-foot left" />
          <span className="machine-foot right" />
        </div>
        <div className="ar-reticle"><span /></div>
        <div className="ar-label ar-label-top">REAL SCALE</div>
        <div className="ar-label ar-label-bottom">AR / 3D VIEWER</div>
      </div>
    );
  }

  if (type === "beehour") {
    return (
      <div className="project-visual project-visual-bee" aria-label={title}>
        <div className="bee-orbit one" />
        <div className="bee-orbit two" />
        <div className="bee-clock">
          <span className="bee-hand long" />
          <span className="bee-hand short" />
          <span className="bee-dot" />
        </div>
        <strong>BeeHour</strong>
        <small>time • activity • flow</small>
      </div>
    );
  }

  if (type === "wallet") {
    return (
      <div className="project-visual project-visual-wallet" aria-label={title}>
        <div className="wallet-phone">
          <div className="wallet-notch" />
          <div className="wallet-card">
            <div className="wallet-brand">VERTEX / MEMBER</div>
            <div className="wallet-qr" />
            <div className="wallet-lines"><span /><span /></div>
          </div>
        </div>
        <div className="wallet-pulse one" />
        <div className="wallet-pulse two" />
      </div>
    );
  }

  return <div className="project-visual project-visual-default">{title}</div>;
}
