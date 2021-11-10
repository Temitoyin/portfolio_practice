import React, {useEffect, useRef, useState} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./opportunities.module.scss";
    
const tl = gsap.timeline({ paused: true });
const t2 = gsap.timeline({ paused: true });

const Opportunities = () => {
    const array = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];
    let newArray = array;
    const [timer, setTimer] = useState(array);
     gsap.registerPlugin(ScrollTrigger);

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
    let img__container__ref = useRef()
    let img__one__ref = useRef();
    let img__two__ref = useRef();
    let img__three__ref = useRef();
    let img__four__ref = useRef();
   
    // tl.to("#text1", {
    //   x: 200,
    //   duration: 0.5,
    // });
    //  tl.to("#text1", {
    //    x: 300,
    //    duration: 0.5,
    //  });
    //  tl.to("#text1", {
    //    x: 400,
    //    duration: 0.5,
    //  });
    
    
    t2.to(
      [
        "#itemA",
        "#itemB",
        "#itemC",
        "#itemD",
        "#itemE",
        "#itemF",
        "#itemG",
        "#itemH",
      ],
      {
        x: 100,
        duration: 0.5,
        repeat: 2,
        stagger: 1,
      }
    );
    
    useEffect(() => {
          setInterval(() => {
              newArray = shuffle(array);
              setTimer(newArray)
            //   gsap.set(img__one__ref.current, {
            //     attr: { src: timer[0] },
            //   });
            //    gsap.to(
            //      [
            //        img__one__ref.current,
            //        img__two__ref.current,
            //        img__three__ref.current,
            //        img__four__ref.current,
            //      ],
            //      {
            //        y: 100,
            //        stagger: 1,
            //      }
            //    );

            //   gsap.set(img__two__ref.current, {
            //     attr: { src: timer[1] },
            //     // ease: "power3.in",
            //     // duration: 5,
            //     // delay: 0.5,
            //   });
            //   gsap.set(img__three__ref.current, {
            //     attr: { src: timer[2] },
            //     // ease: "power3.in",
            //     // duration: 5,
            //     // delay: 0.5,
            //   });
            //   gsap.set(img__four__ref.current, {
            //     attr: { src: timer[3] },
            //     // ease: "power3.in",
            //     // duration: 2,
            //     // delay: 0.5,
            //   });
                //    gsap.to(
                //      [
                //        img__one__ref.current,
                //        img__two__ref.current,
                //        img__three__ref.current,
                //        img__four__ref.current,
                //      ],
                //      {
                //        y: -100,
                //        stagger: 1,
                //        delay: 0.5,
                //      }
                //    );
            console.log(newArray);
            //   setTimer(10000);
          }, 5000);
    }, [])
   
    useEffect(() => {
        t2.play();
          tl.play();
    //    window.addEventListener("load", function () {
         
           
    //        console.log("played");
    //    });
         gsap.to("#text1", {
           x: 1400,
           duration: 2,
           ease: "slow",
           scrollTrigger: {
             trigger: "#text1",
             scrub: true,
           },
         });
         gsap.to("#hero__title__dash", {
            scrollTrigger: {
              trigger: "#hero__title",
            //   scroller: "[data-scroll-container]",
            markers: true,
              scrub: true,
            //   start: "-8% 9%",
            //   end: "110% 20%",
            },
            scaleX: 4,
            ease: "none",
          });
      
    }, []);
    // useEffect(() => {
       
    // }, [])
  return (
    <div className={styles.wrapper} data-scroll-container="">
      <div className={styles.wrapper_container}>
        <div className={styles.img__container} ref={img__container__ref}>
          <div className={styles.img__wrapper}>
            <img ref={img__one__ref} src={timer[0]}></img>
          </div>
          <div className={styles.img__wrapper}>
            <img ref={img__two__ref} src={timer[1]}></img>
          </div>
          <div className={styles.img__wrapper}>
            <img ref={img__three__ref} src={timer[2]}></img>
          </div>
          <div className={styles.img__wrapper} id="imgContainerRef">
            <img ref={img__four__ref}src={timer[3]}></img>
          </div>
        </div>
      </div>
      <ul className={styles.list__container}>
        <li id="itemA">A</li>
        <li id="itemB">Y</li>
        <li id="itemC">O</li>
        <li id="itemD">R</li>
        <li id="itemE">I</li>
        <li id="itemF">N</li>
        <li id="itemG">D</li>
        <li id="itemH">E</li>
      </ul>
      <div className={styles.bottom_text__experimentation}>
        <div className={styles.textDiv} id="text1">
          <p>
            This is my greatest creation <br />
            Treat it well and never forget from <br />
            whence you came/
          </p>
        </div>
      </div>
      <div>
          <div className={styles.bottom} >
              <div className={styles.hero__title} id="hero__title">
              <span className={styles.hero__title__dash} id="hero__title__dash">——</span>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Opportunities;
