import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

let mapStateToPropsRedirect = (state) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = Component => ({...props}) => {
  if (!props.isAuth) return <Redirect to='/login'/>
  return <Component {...props} />
}

export default connect(mapStateToPropsRedirect)(withAuthRedirect)
