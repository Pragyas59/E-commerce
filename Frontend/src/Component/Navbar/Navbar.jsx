import logo from '../Assets/logo.png'
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

 export const Navbar = () => {

  const [menu, setmenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Style</p>

      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setmenu("shop") }}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>   {/*it is used when we clik on mens womens and other the underline will go there*/}
        <li onClick={() => { setmenu("mens") }}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("womens") }}><Link style={{textDecoration:'none'}} to='/womens'>womens</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("kids") }}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
      <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link>
      <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
 }