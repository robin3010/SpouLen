import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './header.scss'
import Logo from 'shared/assets/logo_main.svg'

export const Header = () => (
  <Navbar
    className='bg-body-tertiary'
    sticky='top'
  >
    <Container>
      <Navbar.Brand
        className='text-primary'
        as={Link}
        to='/'
      >
        <Image
          className='navbar-logo'
          src={Logo}
          alt='SpouLen logo'
        />
      </Navbar.Brand>
      <Nav className='ms-auto column-gap-2'>
        <NavLink to='/'>Главная</NavLink>
        <NavLink to='/about'>О проекте</NavLink>
      </Nav>
    </Container>
  </Navbar>
)
