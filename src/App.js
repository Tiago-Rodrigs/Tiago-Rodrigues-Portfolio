import { React } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import BackgroundEffect from "./components/background-effect";
import AOS from "aos";
import "aos/dist/aos.css";

import "./global.css";

function App() {
  // scroll library
  AOS.init({
    duration:2500,
    
  });

  return (
    <div className="App">

      <BackgroundEffect/>
      <BrowserRouter>
        <Switch>
          {/* Here is all the routes */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
