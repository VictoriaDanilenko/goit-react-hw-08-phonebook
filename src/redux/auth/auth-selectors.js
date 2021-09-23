export const getIsLoggedIn = (state) => state.auth.isLoggedIn
export const getUsername = (state) => state.auth.user.name
export const getUserEmail = (state) => state.auth.user.email
export const getUserToken = (state) => state.auth.user.token
export const getIsFetchingCurrentUser = (state) =>
  state.auth.isFetchingCurrentUser