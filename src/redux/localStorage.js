export const loadState = () => {
  const isAuthState = localStorage.getItem('isAuth')
  const usernameState = localStorage.getItem('username')
  return {
    isAuth: JSON.parse(isAuthState),
    username: JSON.parse(usernameState)
  }
}

export const saveState = (isAuth, username) => {
  try {
    const isAuthState = JSON.stringify(isAuth)
    const usernameState = JSON.stringify(username)
    localStorage.setItem('isAuth', isAuthState)
    localStorage.setItem('username', usernameState)
  } catch (err) {
    console.log(err)
  }
}
