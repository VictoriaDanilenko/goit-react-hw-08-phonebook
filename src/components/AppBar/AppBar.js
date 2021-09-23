import React from 'react'
import Navigation from './Navigation'
import AuthNav from './AuthNav'
import UserMenu from './UserMenu'
import { NavWrapper } from './Navigation.styled'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../redux/auth/auth-selectors'
import AppBar from '@material-ui/core/AppBar'

function AppBarr() {
  const isLoggedIn = useSelector(getIsLoggedIn)
  return (
    <AppBar position="sticky" className="Appbar">
      <NavWrapper>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </NavWrapper>
    </AppBar>
  )
}

export default AppBarr
