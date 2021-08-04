import { React } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';
import './index.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Switch>
            <Route exact path="/" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

          </Switch>
          
          <Footer/>
        
      </BrowserRouter>
     
    </div>
  );
}

export default App;
