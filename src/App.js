import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Home from './pages/home';  
import Cart from './pages/cart/cart';  
import About from './pages/about/about';
import './App.css';
import NavbarMain from './components/navbarOne/navbarMain';
import NavbarTwo from './components/navbarTwo/navbarTwo';
import ShopContextProvider from './context/shop-context';




function App() {
  let disableTransitions = window.innerWidth < 768;

  return (
    <div className="App">
      <ShopContextProvider>
<Router location={disableTransitions ? {transition: 'none'} : {}}>
        <div className='appNav'>
        <NavbarMain/>
        <NavbarTwo/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact"/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
