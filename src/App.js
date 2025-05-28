import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import BannerImage from'./assets/scenery.jpg';
import Tests from './pages/tests';
import Activity from './pages/Activity';
import Login from './pages/auth/Login';
import AdminLayout from './components/AdminLayout';
import { AuthContext } from './contexts/AuthContext';
import { ContextProvider } from './contexts/contextProvider';
import Register from './pages/auth/Register';
import AllPosts from './pages/AllPosts';

function App() {
  return (
    <div className="App"
      style= {{ 
      // backgroundImage: `url('${BannerImage}')`
      }}
    >
      <ContextProvider>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {< Home />} />
          <Route path='/services' element = {< Services />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element ={<Contact />} />
          <Route path='/tests' element = {<Tests />} />
          <Route path='/activities' element = {< Activity />} />
          <Route path='/login' element = {< Login />} />
          <Route path='/reg' element = {< Register />} />
          <Route path='/allposts' element = {< AllPosts />} />
        </Routes>
        <Footer/>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
