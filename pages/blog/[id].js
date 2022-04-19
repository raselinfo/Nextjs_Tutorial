import React from 'react';
import { useRouter } from 'next/router';
const Blog = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <h1>Hello Blog {id}</h1>
        </div>
    );
};

export default Blog;