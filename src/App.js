// import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="bucket-app">
      <Navbar />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
