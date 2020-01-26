import React from 'react';
import BaseLayout from '../components/BaseLayout/BaseLayout';
import axios from 'axios';
import Link from 'next/link';

export default class Test extends React.Component {

    static async getInitialProps({query}) {
        const testId = query.id;
        return {testId}
    }


    render() {
        const {testId} = this.props;
        return (
            <BaseLayout>
                <p>This is the test page</p>
        <p>{testId}</p>
            </BaseLayout>
        );
    }
}