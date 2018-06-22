import React from 'react';

class ReactReduserExample extends React.Component {
    
    render() {
        return(
            <ul>
                <li>{this.props.user.name}</li>
            </ul>
        );
  }
}

export default ReactReduserExample;