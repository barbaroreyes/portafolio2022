import React, { useState } from 'react';

function NavigationDropdown() {
  const [displayLinks, setDisplayLinks] = useState(false);

  return (
    <nav>
      <button style={{width:"150px" ,borderRadius:"10px",}} onClick={() => setDisplayLinks(!displayLinks)}>
        {displayLinks ? 'GO' : 'Navigation'}
      </button>
      {displayLinks && (
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Servicios</a></li>
        </ul>
      )}
    </nav>
  );
}

export default NavigationDropdown;