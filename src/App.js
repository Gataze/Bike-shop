// import logo from './logo.svg';
import './App.css';
import MobileNav from './MobileNav';
import MainPage from './MainPage';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <Router>
        <div className="App">
          <MobileNav />
          <MainPage />
          
        </div>
    </Router>
    
  );
}

export default App;
