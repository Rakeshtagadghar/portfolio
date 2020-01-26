import React from 'react';
import BaseLayout from '../components/BaseLayout/BaseLayout';
import axios from 'axios';
import Link from 'next/link';

export default class Portfolio extends React.Component {

    static async getInitialProps() {
        let posts = {}

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

            posts = response.data;
        } catch (err) {
            console.log(console.log(err))
        }
        return { posts: posts.splice(0, 10) }
    }

    renderPosts = posts => {
        return posts.map(post => {
            return <li key={post.id}>
                <Link as={`/portfolio/${post.id}`} href={`/portfolio/[id]`} >
                    <a >{post.title}</a>
                </Link>
            </li>
        })
    }


    render() {
        const { posts } = this.props;
        return (
            <BaseLayout>
                <p>This is the Portfolio page</p>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </BaseLayout>
        );
    }
}