import React, { useState } from 'react'
import { Input, InputWrapper, Wrapper } from './Registration.styled'
import { useDispatch } from 'react-redux'
import * as authOperation from '../../redux/auth/auth-operations'
import Button from '@material-ui/core/Button'

function Registration() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
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
    dispatch(authOperation.register({ name, email, password }))
    eraseInputs()
  }

  const eraseInputs = () => {
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={name}
            placeholder="Name *"
          />
        </InputWrapper>

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
          Register
        </Button>
      </form>
    </Wrapper>
  )
}

export default Registration