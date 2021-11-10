import React, {useEffect, useRef} from 'react'
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap"
import styles from "./home.module.scss";
const Home = () => {
//     const scrollEl = document.querySelector("[data-scroll-container]");
    gsap.registerPlugin(ScrollTrigger);
  
//   const scroll = new LocomotiveScroll({
//     el: scrollEl,
//     smooth: true,
//     lerp: 0.06,
//     tablet: {
//       breakpoint: 768,
//     },
//   });
const circleRef = useRef(null);

useEffect(() => {
    gsap.to("#thirdLayer", {
      x: 600,
      duration: 3,
      ease: "bounce",
      delay: 1,
      scrollTrigger: {
        markers: true,
        trigger: "#thirdLayer"
      }
    });
  }, []);
    return (
      <div className={styles.container} data-scroll-container="">
        <div className='wrapper'>
          <h5>
            The <b>HAMBRG</b>, is a creative, engineer driven, global agency
            working on advancing the software, advertising and design communities
            to new heights.
          </h5>
        </div>
        <div className={styles.layer1}>
            <p>helloooooo</p>
        </div>
        <div className={styles.layer2}>
            We move 
        </div>
        <div className={styles.layer3}>
            <div id="thirdLayer" ref={circleRef} className={styles.circle}/>
        </div>
      </div>
    );
  }

  export default Home;