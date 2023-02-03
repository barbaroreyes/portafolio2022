import React, { useState } from 'react';
import {Link} from "react-router-dom"
function NavigationDropdown() {
  const [displayLinks, setDisplayLinks] = useState(false);

  return (
    <nav>
      <button style={{width:"150px" ,borderRadius:"10px",}} onClick={() => setDisplayLinks(!displayLinks)}>
        {displayLinks ? 'GO' : 'Navigation'}
      </button>
      {displayLinks && (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default NavigationDropdown;