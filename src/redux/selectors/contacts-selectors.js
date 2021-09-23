export const contactsItems = (state) => state.contacts.items
export const filterItems = (state) => state.contacts.filter

export const visibleContacts = (state) => {
  const contacts = contactsItems(state)
  const filter = filterItems(state)

  const normalizedFilter = filter.toLowerCase()
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter),
  )
}
