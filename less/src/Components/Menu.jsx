import { NavLink } from "react-router-dom";




function Menu() {



  return (

    <ul className='flex items-center gap-2'>
      <li >
      <NavLink className={({isActive}) => "px-4 text-xl py-2 hover:bg-slate-300 rounded-md transition duration-150 ease-out hover:ease-in" + (isActive ? " bg-slate-500 text-white" : "") } to='/home'>Home</NavLink>
      </li>
      <li >
      <NavLink className={({isActive}) => "px-4 text-xl py-2 hover:bg-slate-300 rounded-md transition duration-150 ease-out hover:ease-in" + (isActive ? " bg-slate-500 text-white" : "") } to='/movies'>Movies</NavLink>
      </li>
      <li >
      <NavLink className={({isActive}) => "px-4 text-xl py-2 hover:bg-slate-300 rounded-md transition duration-150 ease-out hover:ease-in" + (isActive ? " bg-slate-500 text-white" : "") } to='/tv-show'>TVShow</NavLink>
      </li>
      <li >
      <NavLink className={({isActive}) => "px-4 text-xl py-2 hover:bg-slate-300 rounded-md transition duration-150 ease-out hover:ease-in" + (isActive ? " bg-slate-500 text-white" : "") } to='/contacts'>Contact</NavLink>
      </li>
    </ul>
  );
}

export default Menu;