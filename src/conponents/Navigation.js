import React, { useState } from 'react';
import {Link} from "react-router-dom"
function NavigationDropdown() {
  const [displayLinks, setDisplayLinks] = useState(false);

  return (<>
    <nav className="short-navigation">
      <button style={{width:"150px" ,borderRadius:"10px",}} onClick={() => setDisplayLinks(!displayLinks)}>
        {displayLinks ? 'GO' : 'Navigation'}
      </button>
      {displayLinks && (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      )}
      
    </nav>
    
    <ul className="long-navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
    
       
    </>
  );
}

export default NavigationDropdown;