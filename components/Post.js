import React from 'react';
import Link from "next/link"
const Post = ({ url, title, des }) => {
    return (
        <Link href={`/blog/${title}`} >
            <a>
                <div className="blog__item bg-slate-200 py-5 px-8 mb-5">
                    <h4 className="text-semi-bold text-2xl">{title}</h4>
                    <p>{des}</p>
                </div>
            </a>
        </Link>
    );
};

export default Post;