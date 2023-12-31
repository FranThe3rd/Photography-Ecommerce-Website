import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Home from './pages/home';  
import Cart from './pages/cart/cart';  
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import './App.css';
import NavbarMain from './components/navbarOne/navbarMain';
import NavbarTwo from './components/navbarTwo/navbarTwo';




function App() {
  let disableTransitions = window.innerWidth < 768;

  return (
    <div className="App">
<Router location={disableTransitions ? {transition: 'none'} : {}}>
        <div className='appNav'>
        <NavbarMain/>
        <NavbarTwo/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
