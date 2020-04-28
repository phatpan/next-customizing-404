import Link from 'next/link';
export default () => {
    return (<div>
        <h2>This is index page</h2>
        <Link href="/profile">
            <a>Go to Profile</a>
        </Link>
    </div>
    )
}