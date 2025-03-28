import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Navbar/Nav";
import Hero from "./Components/Hero/Hero";

function App() {
  const [orderPopup, serOrderPopup] = useState(false)

  const handleOrderPopup =()=>{
    serOrderPopup(!orderPopup);
  }

useEffect(()=>{
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  });
  AOS.refresh();
}, []);

  return (
    <>
     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Nav handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Banner />
     </div>
    </>
  )
}

export default App
