export const authService = (username, password) => (
  new Promise((resolve, reject) => {
    if (username === 'Admin' && password === '12345') {
      resolve()
    } else {
      reject(new Error('Имя пользователя или пароль введены не верно'))
    }
  })
)

export const getNews = async () => {
  const url = 'https://newsapi.org/v2/everything?domains=lenta.ru&apiKey=05ac12011c304d2085debadb253246bd'
  const request = await fetch(url)
  const data = await request.json()

  return data
}
