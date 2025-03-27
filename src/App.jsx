import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";

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
      
     </div>
    </>
  )
}

export default App
