// import React from "react"
// import "./Header.css"
// import { Link } from "react-router-dom"
// import { FaSearch } from 'react-icons/fa';

// const header = () => {
//     return (
//         <div className="header">
//         <div className="headerLeft">
//           <Link to="/">
//             <p>MovieMentor</p>
//           </Link>
//           <Link to="/movies/popular" style={{ textDecoration: "none" }}>
//             <span>Popular</span>
//           </Link>
//           <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
//             <span>Top Rated</span>
//           </Link>
//           <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
//             <span>Upcoming</span>
//           </Link>
//         </div>
//         <div className="headerRight">
//           <input type="text" placeholder="What are you looking for?" />
//           <button type="submit"><FaSearch /></button>
//         </div>
//       </div>
//     )
// }

// export default header


import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here

    setSearchQuery(""); // Reset the searchQuery state to an empty string
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <p>MovieMentor</p>
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
      <div className="headerRight">
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;


