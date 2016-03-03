import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';

class App extends Component {
	static propTypes = {
		state: PropTypes.object.isRequired
	};

	render() {
		return (
			<div>
				<p>This is A Boilerplate React and Redux App :)</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
