import React, {useEffect, useRef, useState} from "react";
// import LocomotiveScroll from "locomotive-scroll";
import Home from './components/home/home';
import TestFlight from './components/TestFlight/testFlight'
import TestFlight2 from './components/TestFlight2/testFlight2'
import Opportunities from './components/Opportunities/opportunities'
import "./App.scss";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
// let cursor = useRef(null);
// const [mouseX, setMouseX] = useState(0)
// const [mouseY, setMouseY] = useState(0)

// const cursorScale = (e) => {
//   e.preventDefault();
//   console.log('clicked');
//   gsap.set(cursor.current, {
//     css: {
//     scale: 1.2
//     }
// });
// }
// ;
//  useEffect(() => {
//     window.addEventListener('mousemove', (event) => {
//       setMouseX(event.clientX);
//       setMouseY(event.clientY);
//     });
//     return {

//     }
//   }, [mouseX, mouseY])
//   useEffect(() => {
//         gsap.set(cursor.current, {
//             css: {
//             left: mouseX,
//             top: mouseY 
//             },
//             ease: 'power2.in',
//             duration: 1,
//             delay: 0.1
//         });

//   }, [mouseX, mouseY])


  return (
    <Router>
      <div className='App' >
        <div className='container'>
          <div className='wrapper'>
            {/* <div className='home'> */}
              <Switch>
                {/* <Route exact path='/' component={Home} /> */}
                <Route exact path='/' component={Opportunities} />
                <Route exact path='/test' component={TestFlight} />
                <Route exact path='/test2' component={TestFlight2} />
              </Switch>
            {/* </div> */}
          </div>
          <div className="cursor" id='cursor'></div>
        </div>
      </div>
    </Router>
  );
}



function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

// function Home() {
//   return (
//     <div className='container' >
//       <div className='wrapper'>
//         <h5>
//           The <b>HAMBRG</b>, is a creative, engineer driven, global agency
//           working on advancing the software, advertising and design communities
//           to new heights.
//         </h5>
//       </div>
//     </div>
//   );
// }
export default App;
