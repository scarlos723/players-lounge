import styled, { css } from 'styled-components'
import PlLogo from '../../assets/Navbar/PLLogo.png'
import MenuLogoImg from '../../assets/Navbar/MenuLogo.png'
import { ResponsiveTo } from '../../hooks/useResponsive'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top:0;
  justify-content: space-between;
  align-items: center;
  background-color: #0F0223;
  height: 100px;
  box-shadow:0px 2px 50px 50px #0F0223;
  padding-top:72px;
  ${ResponsiveTo()}{
    box-shadow:none;
    background-color: transparent;
    justify-content: center;
  }

`

export const Navbar = styled.nav`
  display: none;
  position: absolute;
  background-color: #0F0223;
  top: 100px;
  width: 100%;
  ${props => props.showMenu &&
    css`display:flex; flex-direction:column;`

  }
  ${ResponsiveTo()}{
    background-color:transparent;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    width: auto;
    position: static;
  }


`
export const Logo = styled(Link)`
  width: 127px;
  height: 94px;
  background-image: url(${PlLogo});
  margin-left: 32px;
`
export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-size: 18px;
  margin: 0;
  padding: 0;
  li{
    text-align: center;
    margin-bottom: 20px ;
    a{
      color: white;
      text-decoration: none;
    }
  }
  ${ResponsiveTo()}{
    flex-flow: row nowrap;
    align-items: center;
    

    li{
      margin: 0;
      margin-left: 30px;
    }
  }

  ${ResponsiveTo('Desktop22')}{
    margin: 0 35px;
    li{
      margin-left: 90px;
    }
  }
 
`
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  input{
    color: white;
    border-radius:57px;
    height: 35px;
    padding: 0 30px;
    font-size: 18px;
    outline: none;
    background-color: transparent;
    border: 1px solid white;
    &::placeholder{
      color: white;
    }
  }
  ${ResponsiveTo()}{
    width: 406px;
  }
`

export const RegisterBtn = styled.button`
  width: 151px;
  height: 45px;
  left: 1621px;
  top: 93px;
  font-size: 18px;
  font-weight: 700;
  background: #FFFFFF;
  border-radius: 57px;
  margin: 10px auto;
  margin-right: 59px;
`

export const MenuLogo = styled.div`
  width: 74px;
  height: 52px;
  background-image: url(${MenuLogoImg});
  margin-right: 63px;
  ${ResponsiveTo()}{
    display: none;
  }

`
