import React, { useState } from 'react';
// import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";


function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    } else if (currentPage === 'Contact') {
      return <Contact />;
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />;
    } else if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (currentPage) => setCurrentPage(currentPage);

  return (
    <header className="flex text-center text-green-700">
      <h3>Eric J. Seader</h3>
    </header>
  );
}





export default Header;