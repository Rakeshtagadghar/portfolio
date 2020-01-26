import React from 'react';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio extends React.Component {
    constructor(props) {
        super(props)
    }

    static async getInitialProps(context) {
        let post = {}
        const postId = context.query.id;

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

            post = response.data;
            console.log(post)
        } catch (err) {
            console.log(err)
        }
        return { post }
    }

    render() {
        console.log(this.props)
        const { post } = this.props;
        return (
            <BaseLayout>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);