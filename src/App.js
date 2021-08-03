import { React, Component } from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import './App.css';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

          </Switch>
          </HashRouter>
          <Footer/>
        
      </BrowserRouter>
     
    </div>
  );
}

export default App;
