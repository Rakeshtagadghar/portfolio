import React from 'react';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import { withRouter } from 'next/router';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <BaseLayout>
                <p>{this.props.router.query.id}</p>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);