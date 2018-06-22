import React from 'react';
import { connect } from 'react-redux';
import { fetchUserApi } from '../actions/userActions';
import ReactReduserExample from '../ReactReduserExample';

function mapStateToProps(state){
    return state = {
        user: state.user.user
    };
}

class ReactReduserExampleContainers extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUserApi());
    }
    render() {
        return(
            <ReactReduserExample user={this.props.user} />
        );
  }
}

export default connect(mapStateToProps)(ReactReduserExampleContainers);