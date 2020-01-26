import React, { Component } from 'react';
import Header from '../Shared/header'
class Layout extends Component {
    render() {
        return (
            <>
                <Header title="I am Header title" >
                    <h2>I am sub title Header</h2>
                </Header>
                {this.props.children}
            </>
        )
    }
}

export default Layout