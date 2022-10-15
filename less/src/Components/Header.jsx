
import Menu from './Menu.jsx'
import Search from './Search.jsx'
import Registered from './Registered.jsx'
import logo from '../image/logo.svg'
import { NavLink } from "react-router-dom";

function Header() {

    



  return (
    <header className='flex justify-between items-center max-w-screen-2xl mx-auto p-6'>
        <div className='flex items-center gap-6'>
          <NavLink className={({isActive}) => "nav-link" + (isActive ? " selected" : "") } to='/home'>
          <img className='w-24 h-auto' src={logo} alt='Logo' />
        </NavLink>
        <Menu />
        </div>
        <div className='flex items-center gap-6'>
            <Search />
            <Registered />
        </div>
    </header>
  );
}

export default Header;
