import { React } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import "./global.css";

function App() {
  return (
    <div className="App">
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
