import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import {compose} from 'redux'
import Login from './components/Login/Login'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import NewsContainer from './components/News/NewsContainer'
import Main from './components/Main/Main'

const App = () => {
  return (
    <div className="container-lg">
      <HeaderContainer/>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Main/>}/>
          <Route path="/news" render={() => <NewsContainer/>}/>
          <Route path="/profile" render={() => <ProfileContainer/>}/>
          <Route path="/login" render={() => <Login/>}/>
          <Route path="*" render={() => <h1>404 NOT FOUND</h1>}/>
        </Switch>
      </div>
    </div>
  )
}

export default compose(withRouter)(App)

