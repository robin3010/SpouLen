import { NavLink } from 'react-router-dom'
import './styles.css'

export const Header = () => (
  <div>
    <span>Header</span>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
  </div>
)
