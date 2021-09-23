import React from 'react'
import { StyledNavLink, Wrapper } from './Navigation.styled'

function AuthNav() {
  return (
    <Wrapper>
      <StyledNavLink to="/login" className="link" activeClassName="activeLink">
        Login
      </StyledNavLink>
      <StyledNavLink
        to="/register"
        className="link"
        activeClassName="activeLink"
      >
        Register
      </StyledNavLink>
    </Wrapper>
  )
}

export default AuthNav
