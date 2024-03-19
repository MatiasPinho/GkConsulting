import React from "react";
import "./Blog.css";
import { InstagramEmbed } from "react-social-media-embed";

export const Blog = () => {
  return (
    <section className="blog">
      <section className="blog-content">
        <div className="blog__header">
          <img className="blog__logo" src="./gk_black.png" alt="" />
          <h1 className="blog__title">GK Consulting</h1>
        </div>
        <section className="blog__feed">
          <div
            className="ig-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <InstagramEmbed url="https://www.instagram.com/p/C4Qr7nirQEX/" />
          </div>
          <div
            className="ig-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <InstagramEmbed url="https://www.instagram.com/p/C2_ACCyLdS7/" />
          </div>
          <div
            className="ig-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <InstagramEmbed url="https://www.instagram.com/p/C2-95QRLCTW/" />
          </div>
        </section>
      </section>
    </section>
  );
};
