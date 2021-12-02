import {connect} from 'react-redux'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {actionLogout} from '../../redux/auth-reducer'
import Profile from './Profile'

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  username: state.auth.username
})

const mapDispatchToProps = (dispatch) => (
  {
    logout: () => dispatch(actionLogout())
  }
)

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Profile)

