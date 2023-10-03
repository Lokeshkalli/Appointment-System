// import logo from './logo.svg';
import './App.css';
import DoctorsList from './Components/DoctorsList';
import {Link,BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Components/Navbar';
import AllRoutes from './AllRoutes';
function App() {
  

  return (
    <div className="App">
     <Router>
      <Navbar />
      <AllRoutes />
     

     </Router>
    </div>
  );
}

export default App;
