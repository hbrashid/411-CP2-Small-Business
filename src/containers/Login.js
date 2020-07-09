import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUser } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username) => dispatch(loginUser(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);