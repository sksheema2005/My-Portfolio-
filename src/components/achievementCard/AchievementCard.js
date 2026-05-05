import React from "react";
import "./AchievementCard.scss";

import {Chip} from "@material-ui/core";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className={isDark ? "dark-mode certificate-card" : "certificate-card"}
      style={{
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        border: "none",
        borderRadius: "15px",
        overflow: "hidden",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-10px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div className="certificate-image-div">
        <img
          src={cardInfo.image.default || cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <Chip
              key={i}
              label={v.name}
              onClick={() => openUrlInNewTab(v.url, v.name)}
              color="primary"
              variant="outlined"
              style={{
                margin: "5px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
