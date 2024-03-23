import React from "react";
import "./Blog.css";
import { InstagramEmbed } from "react-social-media-embed";
import { Helmet } from "react-helmet-async";

export const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog de GK Consulting: Innovación y Eficiencia en Acción</title>
        <meta
          name="description"
          content="Descubre el blog de GK Consulting. Conoce a nuestra abogada, apasionada por brindar soluciones integrales que impulsen el crecimiento de tu empresa. Desde su formación hasta sus logros profesionales, descubre cómo ha innovado y contribuido al éxito empresarial."
        />
        <meta
          property="og:description"
          content="Explora el blog de GK Consulting, donde nuestra abogada y contadora comparten publicaciones"
        />

        <meta
          property="og:title"
          content="Blog de GK Consulting: Publicaciones de Innovación y Eficiencia"
        ></meta>
        <link
          rel="canonical"
          href="https://gk-consulting.vercel.app/blog"
        ></link>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:image"
          content="https://i.pinimg.com/originals/69/90/ac/6990ac2eb977f26dafb9e3a5c00af8f2.png"
        />
      </Helmet>
      <section className="blog">
        <section className="blog-content">
          <div className="blog__header">
            <a href="https://www.instagram.com/gkconsultingcompany/"></a>

            <h1 className="blog__title">
              <strong className="alternative-strong">GK</strong> Consulting
            </h1>
          </div>
          <section className="blog__feed">
            <div
              className="ig-container"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <InstagramEmbed url="https://www.instagram.com/p/C4Qr7nirQEX/" />
            </div>
            <div
              className="ig-container ig-2"
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
    </>
  );
};
