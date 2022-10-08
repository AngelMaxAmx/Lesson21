import './header.css';
import Menu from './Menu.jsx'
import Search from './Search.jsx'
import Registered from './Registered.jsx'
import logo from '../image/logo.svg'

function Header() {

    



  return (
    <header>
        <img src={logo} alt='Logo' />
        <Menu />
        <Search />
        <Registered />
    </header>
  );
}

export default Header;
