import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  &.link {
    text-decoration: none;
    color: white;
    margin-right: 10px;
    text-align: center;
    margin-left: 20px;
  }
  &.activeLink {
    font-size: 20px;
  }
`
export const StyledNav = styled.nav`
  /* text-align: center; */
  padding: 10px;
  border-bottom: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`