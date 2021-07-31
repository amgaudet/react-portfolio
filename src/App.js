// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar'

import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path='/'>
          <AboutMe />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
