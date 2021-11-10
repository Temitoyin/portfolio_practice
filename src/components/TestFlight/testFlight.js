import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import styles from "./testFlight.module.scss";
const TestFlight = () => {
  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray("#panel");
  let images = gsap.utils.toArray("#image");
  // let image = document.getElementById("image");
  let description = gsap.utils.toArray("#description");
  const container = document.getElementById("container");
  const [cont, setCont] = useState(false);

  const handleHover = (e, textRef) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      // skewX: -4,
      scaleX: 1.3,
      scaleY: 1.3,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.to(`#description${textRef}`, {
      duration: 0.3,
      y: 40,
      scaleX: 1.3,
      scaleY: 1.3,
    });
  };
  const handleHoverExit = (e, textRef) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 0.3,
      ease: "power3.inOut",
    });
    gsap.to(`#description${textRef}`, {
      duration: 0.3,
      y: 0,
      scaleX: 1,
      scaleY: 1,
    });
  };
  useEffect(() => {
    console.log(container, "container");
    if (container !== null) {
      setCont(true);
    }
    if (container) {
      gsap.to(container, {
        x: () =>
          -(container.scrollWidth - document.documentElement.clientWidth) +
          "px",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          //   invalidateOnRefresh: true,
        //   snap: true,
          pin: true,
          scrub: 1,
          //   end: () => "+=" + container.offsetWidth,
        },
      });
    }
  }, [container]);

  return (
    <div>
      <div className={`${styles.main__container}`} id="container">
        <header className={styles.header}>
          <h1>Temitoyin Ayorinde</h1>
          <p>Contact</p>
        </header>
        <section className={`${styles.page1}  +  ${styles.panel}`} id="panel">
          <div className={styles.introduction__text}>
            <div>
              <h2>
                Web Design & Dev based
                <br />
                in Nigeria
              </h2>
            </div>
            <div className={styles.rule} />
            <p>
              I create impactful &amp; memorable brands by combining top-tier
              design, data &amp; strategy. I maximise the impact of your
              marketing with websites &amp; design rooted in the goals of your
              business and needs of your customers. I am all about helping you
              stand out in the best possible way.
            </p>
          </div>
          <div className={styles.scroll__down}>
            <div>
              <svg
                width="40px"
                height="100%"
                viewBox="0 0 247 390"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                //   style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
              >
                <path
                  id="wheel"
                  d="M123.359,79.775l0,72.843"
                  className={styles.path1}
                />
                <path
                  id="mouse"
                  d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                  className={styles.path2}
                />
              </svg>
              <p>Scroll down</p>
            </div>
          </div>
        </section>
        <section className={`${styles.page2}  +  ${styles.panel}`} id="panel">
          <div className={styles.page__container} id="page2">
            <h3> Here are some of the things I've built</h3>
            <div className={styles.project__container}>
              <div className={styles.project}>
                <div
                  className={styles.project__img}
                  id="image"
                  onMouseEnter={(e) => handleHover(e, 1)}
                  onMouseOut={(e) => handleHoverExit(e, 1)}
                >
                  <img src="website1.png" />
                </div>
                <p id="description1">A furniture website</p>
              </div>
              <div className={styles.project}>
                <div
                  className={styles.project__img}
                  id="image"
                  onMouseEnter={(e) => handleHover(e, 2)}
                  onMouseOut={(e) => handleHoverExit(e, 2)}
                >
                  <img src="website2.webp" />
                </div>
                <p id="description2">A custom made store for Zoopa</p>
              </div>
              <div className={styles.project}>
                <div
                  className={styles.project__img}
                  id="image"
                  onMouseEnter={(e) => handleHover(e, 3)}
                  onMouseOut={(e) => handleHoverExit(e, 3)}
                >
                  <img src="website3.webp" />
                </div>
                <p id="description3"> Creative design for Awwards</p>
              </div>
              <div className={styles.project}>
                <div
                  className={styles.project__img}
                  id="image"
                  onMouseEnter={(e) => handleHover(e, 4)}
                  onMouseOut={(e) => handleHoverExit(e, 4)}
                >
                  <img src="website4.webp" />
                </div>
                <p id="description4">Project description</p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.page3}  +  ${styles.panel}`} id="panel">
          <div className={styles.page__content}>
            <h4>I use a couple of tools to perfom my magic</h4>
            <div className={styles.main__content}>
              <div class={styles.categories}>
                <div class="front-end">
                  <h3>Front end</h3>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Next.js</li>
                    <li>Three.js</li>
                  </ul>
                </div>
                <div class="back-end">
                  <h3>Back end</h3>
                  <ul>
                    <li>Node.js</li>
                    <li>Postman</li>
                    <li>Express</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                  </ul>
                </div>
                <div class="version-control">
                  <h3>Version control</h3>
                  <ul>
                    <li>Git</li>
                    <li>Github</li>
                  </ul>
                </div>
                <div class="data-base">
                  <h3>Database</h3>
                  <ul>
                    <li>MySQL</li>
                    <li>MongoDb</li>
                  </ul>
                </div>
              </div>
              <div className={styles.profileImageContainer}>
                <img src="profile.JPG" />
              </div>
            </div>
          </div>
        </section>
        {/* <section className={`${styles.page4}  +  ${styles.panel}`} id="panel">
          <p>Hello</p>
        </section> */}
      </div>
    </div>
  );
};

export default TestFlight;
