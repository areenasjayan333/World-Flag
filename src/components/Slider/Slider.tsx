import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./Slider.module.css";

const images = [
  "https://www.chartandmapshop.com.au/cdn/shop/files/Flag_of_the_United_States__DoS_ECA_Color_Standard__svg.png?v=1727460153",
  "https://c4.wallpaperflare.com/wallpaper/724/698/368/flag-flags-india-indian-wallpaper-preview.jpg",
  "https://flagcdn.com/eu.svg",
  "https://flagcdn.com/es.svg",
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const goPrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container className="mt-4 mb-4">
      <Row className="align-items-center ">
        {/* Left - Slider */}
        <Col md={9} className="order-2 order-md-0">
          <div className={styles.sliderBox}>
            <div className={styles.carouselContent}>
              <img
                src={images[index]}
                alt={`Slide ${index}`}
                className={`${styles.carouselImage} img-fluid`}
              />
            </div>

            <div className={styles.controls}>
              <button onClick={goPrev} className={styles.arrow}>
                &larr;
              </button>

              <div className={styles.dots}>
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`${styles.dot} ${
                      index === idx ? styles.activeDot : ""
                    }`}
                    onClick={() => setIndex(idx)}
                  />
                ))}
              </div>

              <button onClick={goNext} className={styles.arrow}>
                &rarr;
              </button>
            </div>
          </div>
        </Col>

        {/* Right - Frame */}
        <Col md={3} className="">
          <div className={styles.frameBox}>
            <img
              src={images[index]}
              alt="Preview"
              className={styles.frameImage}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Slider;
