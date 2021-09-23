import React from 'react'
import { Wrapper } from './Container.styled'
import PropTypes from 'prop-types'

function Container({ children }) {
  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Wrapper>{children}</Wrapper>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container