import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex flex-row gap-10 justify-center pt-8 pb-1'>
      <NavLink to="/">
        Home
      </NavLink>

      <NavLink to="/pastes">
        Pastes
      </NavLink>
    </div>
  )
}

export default NavBar
