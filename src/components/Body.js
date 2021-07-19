import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';
import Portfolio from './pages/Portfolio';
import Navbar from './Navbar';


const Body = () => {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  //Checks for current page and renders
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contacts') {
      return <Contacts />;
    } else {
      return <Portfolio />;
    };
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

export default Body
