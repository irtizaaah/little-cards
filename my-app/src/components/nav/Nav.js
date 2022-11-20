import './Nav.css';
import Menu from '../menu/Menu';

import menuIcon from "./menu-icon.png";
import logo from "./logo.png";
import {Link} from "react-router-dom";
import {useState} from "react";

function Nav(props) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    props.setIsShared(true);
    setShowMenu(!showMenu);
  }
  
  return (
    <div className="Nav">
        {!props.isDeckPageOpen ? 
          <img className="menu_img" src={menuIcon} alt="menu icon" onClick={handleClick}/>  : 
          <img  className="logo_img"src={logo} alt="logo"/>}
        <Link to="/"><h1>Little Cards</h1></Link>
        {showMenu ? <Menu className="menu" showMenu={showMenu} setShowMenu={setShowMenu} currentDeckIndex={props.currentDeckIndex} /> : null}
    </div>
  );
}

export default Nav;
