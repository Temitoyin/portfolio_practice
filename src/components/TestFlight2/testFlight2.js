/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon/icon";
import { Link } from "react-scroll";
import styles from "./testFlight2.module.scss";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TestFlight2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  let cursor = useRef(null);
  let header = useRef(null);
  let imageRef = useRef(null);
  let worksContainer = useRef(null);
  let mainContainer = useRef(null);
  const scrollEl = document.querySelector("[data-scroll-container]");
  let scroll;

  useEffect(() => {
    // if(scrollEl){
    //  scroll = new LocomotiveScroll({
    //    el: mainContainer.current,
    //   smooth: true,
    //   // lerp: 0.06,
    //   // tablet: {
    //   //   breakpoint: 768,
    //   // },
    // });
    // }
    // ScrollTrigger.scrollerProxy(scroll.el, {
    //   scrollTop(value) {
    //     return arguments.length
    //       ? scroll.scrollTo(value, 0, 0)
    //       : scroll.scroll.instance.scroll.y;
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       top: 0,
    //       left: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     };
    //   },
    // });
    // scroll.on("scroll", ScrollTrigger.update);
  }, [scrollEl]);

  console.log(scrollEl, "scrolling");

  // useEffect(() => {
  //   const svg = document.querySelector("#svg");
  //   const point = svg.createSVGPoint();
  //   window.addEventListener("mousemove", (event) => {
  //     point.x = event.x;
  //     point.y = event.y;
  //     const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
  //     gsap.set(cursor.current, {
  //       css: {
  //         cx: svgPoint.x,
  //         cy: svgPoint.y,
  //       },
  //       ease: "power2.in",
  //       duration: 1,
  //       delay: 0.1,
  //     });
  //   });
  //   window.addEventListener("scroll", () => {
  //     gsap.set(imageRef.current, {
  //       css: {
  //         position: "fixed",
  //       },
  //     });
  //   });
  //   return {};
  // }, []);
  useEffect(() => {
    header.current.addEventListener("mouseover", () => {
      gsap.to(cursor.current, {
        css: {
          r: 80,
        },
        duration: 0.8,
      });
    });
    header.current.addEventListener("mouseleave", () => {
      gsap.to(cursor.current, {
        css: {
          r: 0,
        },
        duration: 1,
      });
    });
  }, []);

  useEffect(() => {
    const items = gsap.utils.toArray("#project");
    const links = gsap.utils.toArray("#link");
    links.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        let imageData = e.target.getAttribute("data-image");
        gsap.set(imageRef.current, {
          attr: { src: imageData },
          // duration: 1.5,
          ease: "power2.in",
        });
      });
      el.addEventListener("mousemove", (e) => {
        let imageData = e.target.getAttribute("data-image");
        gsap.set(imageRef.current, {
          attr: { src: imageData },
          // duration: 1.5,
          ease: "power2.in",
        });
      });
    });
    items.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        gsap.set(e, {
          css: {
            zIndex: 99,
          },
        });
        gsap.set(imageRef.current, {
          ease: "power2.in",
          // delay: 2,
        });
      });
      el.addEventListener("mousemove", (e) => {
        let imageData = e.target.getAttribute("data-image");
        gsap.set(imageRef.current, {
          attr: { src: imageData },
          css: {
            display: "block",
            top: e.clientY,
            left: e.clientX,
          },
          ease: "power2.in",
        });
      });
      el.addEventListener("mouseleave", (e) => {
        e.target.style.zIndex = 1;
        gsap.set(imageRef.current, {
          attr: { src: "" },
          css: { display: "none" },
          ease: "power2.in",
        });
      });
    });
  }, []);

  // const split = new SplitText("#header__text");
  useEffect(() => {
    const anchors = gsap.utils.toArray("#anchor");
    gsap.to(anchors, {
      color: "#22313f",
      // x: 100,
      duration: 0.2,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#works",
        scrub: true,
        // markers: true,
      },
    });
    gsap.to("#logo", {
      color: "#22313f",
      duration: 0.2,
      ease: "power2.in",
      scrollTrigger: {
        trigger: "#works",
        start: "top 700",
        scrub: true,
        // markers: true,
      },
    });
    gsap.from("#navigation", {
      opacity: 0,
      y: -100,
      duration: 0.6,
      ease: "power2.in",
    });
  }, []);

  return (
    <>
      <div
        className={styles.testFlight2}
        data-scroll-container
        ref={mainContainer}
        id="main"
      >
        <nav className={styles.navigation} id="navigation">
          <div className={styles.left}>
            <Link to="main" smooth="true">
              <h1 id="logo">Temi T</h1>
            </Link>
          </div>
          <div className={styles.right}>
            <ul>
              <li
                id="anchor"
                // onClick={() =>
                //   scroll.scrollTo(document.querySelector("[data-scroll-works]"))
                // }
              >
                <Link to="works__container" smooth={true}>
                  Works
                </Link>
              </li>
              <li id="anchor">
                <Link to="about" smooth={true}>
                  About
                </Link>
              </li>
              <li
                id="anchor"
                onClick={() =>
                  scroll.scrollTo(
                    document.querySelector("[data-scroll-contact]")
                  )
                }
              >
                <Link to="contact" smooth={true}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.topHeader} ref={header}>
          {/* <svg
            width="100%"
            viewBox="113 128 972 600"
            preserveAspectRatio="xMidYMid meet"
            id="svg"
          >
            <defs>
              <mask id="mask">
                <circle fill="#F0F5F9" cx="150" cy="150" r="0" ref={cursor} />
              </mask>
            </defs>
            <image
              mask="url(#mask)"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref="https://images.unsplash.com/photo-1602357280104-742c517a1d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2750&q=80"
            ></image>
            <div className={styles.div} mask="url(#mask)"></div>
          </svg> */}

          <div className={styles.mainText}>
            <p className={styles.greeting} id="gretting">
              Hello
            </p>
            <p className={styles.info} id="header__text">
              <p>
                <span className={styles.introduction}> Temi Toyin</span> is an
                interesting Front<br></br>
              </p>
              <p>-End developer from</p>
              <p className={styles.location} id="location">
                Lagos Nigeria
              </p>{" "}
            </p>
          </div>
        </div>
        <div className={styles.works} data-scroll-works id="works__container">
          <h2 id="works" className={styles.heading}>
            My Projects
          </h2>
          <img src="" id="projectImg" ref={imageRef} />
          <a
            href="https://distracted-euler-df595f.netlify.app/"
            target="_blank"
          >
            <div
              className={styles.project}
              id="project"
              data-image="https://res.cloudinary.com/bankai/image/upload/v1636551254/Portfolio/gdyqktez2jovdy2ycfnx.png"
            >
              <div className={styles.project__text} id="project">
                <h2
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636551254/Portfolio/gdyqktez2jovdy2ycfnx.png"
                >
                  Url Shortener
                </h2>
                <p
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636551254/Portfolio/gdyqktez2jovdy2ycfnx.png"
                >
                  Personal/ React, Axios, Scss
                </p>
              </div>
              <span className={styles.project__arrow}>
                <Icon name="arrow" />
              </span>
            </div>
          </a>

          <div
            className={styles.project}
            id="project"
            data-image="http://www.todaysparent.com/wp-content/uploads/2014/02/Mint1.jpg"
          >
            <div className={styles.project__text} id="project">
              <h2
                id="link"
                data-image="http://www.todaysparent.com/wp-content/uploads/2014/02/Mint1.jpg"
              >
                Dashood
              </h2>
              <p
                id="link"
                data-image="http://www.todaysparent.com/wp-content/uploads/2014/02/Mint1.jpg"
              >
                Logistics/ Next, Redux, Rest, Scss
              </p>
            </div>
            <span className={styles.project__arrow}>
              <Icon name="arrow" className={styles.arrow} />
            </span>
          </div>
          <a href="https://new.konga.com/" target="_blank">
            <div
              className={styles.project}
              id="project"
              data-image="https://res.cloudinary.com/bankai/image/upload/v1636551885/Portfolio/dgfoao6dozilp9vw2kyr.png"
            >
              <div className={styles.project__text} id="project">
                <h2
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636551885/Portfolio/dgfoao6dozilp9vw2kyr.png"
                >
                  konga SuperApp
                </h2>
                <p
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636551885/Portfolio/dgfoao6dozilp9vw2kyr.png"
                >
                  Ecommerce/ React, Redux, Graphql, Scss
                </p>
              </div>
              <span className={styles.project__arrow}>
                <Icon name="arrow" />
              </span>
            </div>
          </a>
          <a href="https://www.konga.com/">
            <div
              className={styles.project}
              id="project"
              data-image="https://res.cloudinary.com/bankai/image/upload/v1636552253/Portfolio/sdsivpsng2ce0seizyni.png"
            >
              <div className={styles.project__text} id="project">
                <h2
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636552253/Portfolio/sdsivpsng2ce0seizyni.png"
                >
                  konga
                </h2>
                <p
                  id="link"
                  data-image="https://res.cloudinary.com/bankai/image/upload/v1636552253/Portfolio/sdsivpsng2ce0seizyni.png"
                >
                  Ecommerce/ Next, Redux, Graphql, Scss
                </p>
              </div>
              <span className={styles.project__arrow}>
                <Icon name="arrow" />
              </span>
            </div>
          </a>
        </div>
        <div className={styles.about} data-scroll-about id="about">
          <div className={styles.about__heading}>
            <h3 id="aboutStuff">About</h3>
            <div>
              <p>
                There are a couple of thi lkjaldlja fj aldjfla lkfja fajljdjf
                akjdlfaj ajdkjflja ajkfdla asdha dhf sdkfk dkalksd ahdka adkalkd
                dkaj ddk adjadj adjd djadjsa
              </p>
              <p>
                There are a couple of thi lkjaldlja fj aldjfla lkfja fajljdjf
                akjdlfaj ajdkjfljakjadk ahjahd shjdhah jadh a hajhd ajhdja jahd
                djahaj ajkfdla asdha dhf sdkfk dkalksd ahdka adkalkd dkaj ddk
                adjadj adjd djadjsa
              </p>
              <p>
                There are a couple of thi lkjaldlja fj aldjfla lkfja fajljdjf
                akjdlfaj ajdkjflja ajkfdla asdha dhf sdkfk dkalksd ahdka adkalkd
                dkaj ddk adjadj adjd djadjsa
              </p>
            </div>
          </div>
          <div className={styles.toolStack}>
            <h4>A couple of the tools I know</h4>
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
          </div>
        </div>
        <footer class={styles.footer} data-scroll-contact id="contact">
          <div class={styles.footer__copyright}>
            Temitoyin © <span id="date"></span> Copyright
          </div>
          <div class={styles.socialmedia__icons}>
            <a
              href="https://twitter.com/toyin_ayorinde"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-2x fa-twitter-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/toyin-ayorinde-55a859101/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-2x fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Temitoyin"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-2x fa-github"></i>
            </a>
            <a
              href="https://codepen.io/temitoyin"
              target="blank"
              rel="noreferrer"
            >
              <i class="fab fa-2x fa-codepen"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TestFlight2;
