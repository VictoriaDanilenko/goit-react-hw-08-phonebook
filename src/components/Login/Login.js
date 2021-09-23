import React, { useState } from 'react'
import { InputWrapper, Input, Wrapper } from './Login.styled'
import { useDispatch } from 'react-redux'
import * as authOperation from '../../redux/auth/auth-operations'
import Button from '@material-ui/core/Button'

function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authOperation.logIn({ email, password }))
    eraseInputs()
  }

  const eraseInputs = () => {
    setEmail('')
    setPassword('')
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={email}
            placeholder="Email *"
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            name="password"
            required
            onChange={handleChange}
            value={password}
            placeholder="Password *"
          />
        </InputWrapper>

        <Button variant="outlined" color="primary" type="submit">
          Log in
        </Button>
      </form>
    </Wrapper>
  )
}

export default Login