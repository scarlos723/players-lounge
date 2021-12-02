import React, { useState } from 'react'
import { Container, Navbar, Logo, Menu, SearchBar, RegisterBtn, MenuLogo } from '../styles/components/NavbarStyles'

export default () => {
  // eslint-disable-next-line no-unused-vars
  const [showMenu, setShowMenu] = useState(false)

  const handleOnClick = (e) => {
    e.preventDefault()
    setShowMenu(!showMenu)
  }
  return (
    <Container>
      <Logo to='/' />
      <Navbar showMenu={showMenu}>
        <Menu>
          <li> <a href='#'> Players </a>  </li>
          <li> <a href='#'> Marketplace </a>  </li>
          <li> <a href='#'> How it works </a> </li>
          <li> <a href='#'> Contact us </a>  </li>
        </Menu>
        <SearchBar>
          <input type='Text' placeholder='Search' />
        </SearchBar>
        <RegisterBtn>
          Register
        </RegisterBtn>
      </Navbar>
      <MenuLogo onClick={handleOnClick} />
    </Container>
  )
}
