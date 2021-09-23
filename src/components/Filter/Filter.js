import React from 'react'
import { Wrapper, Input } from './Filter.styles'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import * as contactsActions from '../../redux/actions/contacts-actions'
import { filterItems } from '../../redux/selectors/contacts-selectors'

function Filter() {
  const dispatch = useDispatch()
  const filter = useSelector(filterItems)

  const handleChange = (e) => {
    dispatch(contactsActions.changeFilter(e.target.value))
  }

  return (
    <Wrapper>
      <Input
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
        placeholder="Find contacts by name"
      />
    </Wrapper>
  )
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
}

export default Filter