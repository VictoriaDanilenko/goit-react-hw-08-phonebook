import React from 'react'
import { Wrapper, List, Item } from './Contacts.styles'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { visibleContacts } from '../../redux/selectors/contacts-selectors'
import * as contactsOperations from '../../redux/operations/contacts-operations'
import Delete from '@material-ui/icons/Delete'
import toast from 'react-hot-toast'

function Contacts() {
  const dispatch = useDispatch()
  const contacts = useSelector(visibleContacts)

  const removeContact = (id) => {
    dispatch(contactsOperations.deleteContact(id))
    toast.success(`Contact deleted`)
  }

  return (
    <Wrapper>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name}: {number}
            <Delete
              color="primary"
              onClick={() => removeContact(id)}
              cursor="pointer"
              size="large"
            ></Delete>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

Contacts.propTypes = {
  id: PropTypes.node,
  name: PropTypes.string,
  number: PropTypes.number,
}

export default Contacts