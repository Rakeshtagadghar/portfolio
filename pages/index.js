
import BaseLayout from '../components/BaseLayout/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';
import ReactGA from 'react-ga';
class Index extends SuperComponent {
    constructor() {

        super()
    }

    static async getInitialProps() {
        let userData = {}

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

            userData = response.data;
        } catch (err) {
            console.log(console.log(err))
        }
        return { userData }
    }

    render() {
        console.log(this.props)
        return (
            <>
                <BaseLayout>
                    <p>Hello Next.js</p>
                    <p>{JSON.stringify(this.props.userData)}</p>
                </BaseLayout>
            </>
        )
    }
}

export default Index;
