// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlaylistActions from '../actions/playlist';
import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlaylistActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
