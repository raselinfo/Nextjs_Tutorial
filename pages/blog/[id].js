import React from 'react';
import { useRouter } from 'next/router';
import Meta from '../../components/Meta';
const Blog = ({ blog }) => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div className='p-5 bg-info text-light'>
            <Meta title={blog.title} keywords={blog.title} description={blog.body} />
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
    );
};

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const blog = await res.json()

    return {
        props: {
            blog
        }
    }
}

export default Blog;