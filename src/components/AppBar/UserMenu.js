import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsername } from '../../redux/auth/auth-selectors'
import { Wrapper, InputName } from './UserMenu.styled'
import Avatar from 'react-avatar'
import { logOut } from '../../redux/auth/auth-operations.js'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(getUsername)

  return (
    <Wrapper>
      <InputName>Welcome, {name}!</InputName>
      <Avatar round size="40" src="https://picsum.photos/200/300" />
      <MeetingRoomIcon
        cursor="pointer"
        fontSize="medium"
        style={{ color: 'white' }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </MeetingRoomIcon>
    </Wrapper>
  )
}

export default UserMenu