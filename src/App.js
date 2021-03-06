// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import Footer from './components/Footer';
import Header from './components/Header'

import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path='/about'>
          <AboutMe />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/contactme'>
          <ContactMe />
        </Route>
      </Router>
    </div>
  );
}

export default App;
