import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import posts from "../../db/posts"
const Slag = () => {
    const router = useRouter()
    const { title } = router.query
    const [post, setPost] = useState(null)
    useEffect(() => {
        const findedPost = posts.find(item => item.title === title)
        setPost(findedPost)
    }, [title])
    if (!post) {
        return <h1>Loading.......</h1>
    }
    
    return (
        <div>
            <div className="bg-slate-100 p-12">
                <h1 className='text-5xl mb-5'>{post.title}</h1>
                <p>{post.des}</p>
            </div>
        </div>
    );
};

export default Slag;