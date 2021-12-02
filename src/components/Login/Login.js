import React, {useState} from 'react'
import {connect} from 'react-redux'
import {actionAuthRequest} from '../../redux/auth-reducer'
import {Redirect} from 'react-router-dom'

const LoginForm = ({props, onSubmit}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(username, password)
    event.target.reset()
  }

  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleSubmit} className='col-sm-5'>
        <h1 className='fw-normal text-center'>Форма входа</h1>
        <div className='mb-1 form-floating'>
          <input type='text' name='username' className='form-control' id='floatingInput' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
          <label htmlFor='floatingInput'>Имя пользователя</label>
        </div>
        <div className='mb-1 form-floating'>
          <input type='password' name='password' className='form-control' id='floatingPassword' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
          <label htmlFor='floatingPassword'>Пароль</label>
        </div>
        <button className='mt-2 mb-3 w-100 btn btn-lg btn-outline-success'>Войти</button>
        {
          props.alert &&
          <div className='alert alert-danger' role='alert'>
            {props.alert}
          </div>
        }
      </form>
    </div>
  )
}

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }

  const onSubmit = (username, password) => {
    props.authRequest(username, password)
  }

  return (
    <div>
      <LoginForm onSubmit={onSubmit} props={props}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  alert: state.app.alert
})

const mapDispatchToProps = (dispatch) => (
  {
    authRequest: (username, password) => dispatch(actionAuthRequest(username, password))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
