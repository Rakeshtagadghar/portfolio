import Link from 'next/link';
import styles from '../../styles/main.scss';
import {Link as NextLink} from '../../routes';

export default (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            {props.children}
            <p className="fromFile">Custom class from file</p>
            <Link href="/about" >
                <a >About Page</a>
            </Link>
            <Link href="/blogs" >
                <a >Blogs Page</a>
            </Link>
            <Link href="/cv" >
                <a >cv Page</a>
            </Link>
            <Link href="/portfolios">
                <a >portfolios Page</a>
            </Link>
            <NextLink route='/test/2'>
      <a>link 2</a>
    </NextLink>
    <NextLink route='/test/4'>
      <a>link 4</a>
    </NextLink>
            <style jsx>{`
            a {
                font-size: 20px
            }
            `}</style>
        </>
    )
}