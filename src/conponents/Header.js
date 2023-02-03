import NavigationDropdown from './Navigation';
import Picture from "./Picture"
const Header = () => {
  return (
        <header style={{
          margin:"10px",
          height:"20vh",
          display:"flex",
          justifyContent:"space-around",
          alignItems:"center",
          }}>
         <Picture/>
         <NavigationDropdown/>
        </header>
   
  );
}

export default Header;
