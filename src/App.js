
import Home from './pages/Home'
import Header from './conponents/Header';
import {Routes , Route} from 'react-router-dom'
import './App.css';
import Footer from './conponents/Footer';

function App() {
  return (
      
          <>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
          </>
        
        
    
  );
}

export default App;
