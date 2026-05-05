import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

import {Tooltip} from "@material-ui/core";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github && (
        <Tooltip title="Github" arrow placement="top">
          <a
            href={socialMediaLinks.github}
            className="icon-button github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            <span></span>
          </a>
        </Tooltip>
      )}

      {socialMediaLinks.linkedin && (
        <Tooltip title="LinkedIn" arrow placement="top">
          <a
            href={socialMediaLinks.linkedin}
            className="icon-button linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
            <span></span>
          </a>
        </Tooltip>
      )}

      {socialMediaLinks.gmail && (
        <Tooltip title="Gmail" arrow placement="top">
          <a
            href={`mailto:${socialMediaLinks.gmail}`}
            className="icon-button google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
            <span></span>
          </a>
        </Tooltip>
      )}

      {socialMediaLinks.gitlab && (
        <Tooltip title="Gitlab" arrow placement="top">
          <a
            href={socialMediaLinks.gitlab}
            className="icon-button gitlab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-gitlab"></i>
            <span></span>
          </a>
        </Tooltip>
      )}

      {socialMediaLinks.facebook && (
        <Tooltip title="Facebook" arrow placement="top">
          <a
            href={socialMediaLinks.facebook}
            className="icon-button facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
            <span></span>
          </a>
        </Tooltip>
      )}

      {socialMediaLinks.instagram && (
        <Tooltip title="Instagram" arrow placement="top">
          <a
            href={socialMediaLinks.instagram}
            className="icon-button instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
            <span></span>
          </a>
        </Tooltip>
      )}

      {socialMediaLinks.twitter && (
        <Tooltip title="Twitter" arrow placement="top">
          <a
            href={socialMediaLinks.twitter}
            className="icon-button twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
            <span></span>
          </a>
        </Tooltip>
      )}

      {socialMediaLinks.medium && (
        <Tooltip title="Medium" arrow placement="top">
          <a
            href={socialMediaLinks.medium}
            className="icon-button medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-medium"></i>
            <span></span>
          </a>
        </Tooltip>
      )}

      {socialMediaLinks.stackoverflow && (
        <Tooltip title="Stack Overflow" arrow placement="top">
          <a
            href={socialMediaLinks.stackoverflow}
            className="icon-button stack-overflow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-stack-overflow"></i>
            <span></span>
          </a>
        </Tooltip>
      )}

      {socialMediaLinks.kaggle && (
        <Tooltip title="Kaggle" arrow placement="top">
          <a
            href={socialMediaLinks.kaggle}
            className="icon-button kaggle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-kaggle"></i>
            <span></span>
          </a>
        </Tooltip>
      )}
    </div>
  );
}
