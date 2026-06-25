import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='w-full bg-[#1a1b26] p-4 flex justify-center gap-10 text-white font-semibold'>
      <NavLink 
        to="/" 
        className={({isActive}) => isActive ? "text-blue-500" : "text-white hover:text-gray-300"}
      >
        Home
      </NavLink>

      <NavLink 
        to="/pastes" 
        className={({isActive}) => isActive ? "text-blue-500" : "text-white hover:text-gray-300"}
      >
        Paste
      </NavLink>
    </nav>
  )
}

export default NavBar
