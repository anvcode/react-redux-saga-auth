import {connect} from 'react-redux'
import News from './News'
import {getNews} from '../../redux/app-reducer'

const mapStateToProps = (state) => ({
  news: state.app.news
})

const mapDispatchToProps = (dispatch) => (
  {
    getNews: () => dispatch(getNews())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(News)
