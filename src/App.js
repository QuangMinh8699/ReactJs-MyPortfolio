import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Home from "./container/home/Home";
import Navigation from "./container/navigation/components/Navigation";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="main">
      <Navigation />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
