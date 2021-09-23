import React from 'react'
import { StyledNavLink, Wrapper } from './Navigation.styled'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../redux/auth/auth-selectors'

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <>
      <Wrapper>
        {!isLoggedIn && (
          <StyledNavLink
            exact
            to="/"
            className="link"
            activeClassName="activeLink"
          >
            Home
          </StyledNavLink>
        )}

        {isLoggedIn && (
          <StyledNavLink
            to="/contacts"
            className="link"
            activeClassName="activeLink"
          >
            Contacts
          </StyledNavLink>
        )}
      </Wrapper>
    </>
  )
}

export default Navigation