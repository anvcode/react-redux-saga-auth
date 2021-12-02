import {connect} from 'react-redux'
import {actionLogout} from '../../redux/auth-reducer'
import Header from './Header'

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  username: state.auth.username
})

const mapDispatchToProps = (dispatch) => (
  {
    logout: () => dispatch(actionLogout())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
