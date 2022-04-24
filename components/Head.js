import React from 'react';
import Link from "next/link"
const Head = () => {
    return (
        <div className='bg-primary text-light text-center p-5'>
            <ul>
                <li>
                    <Link href="/">
                        <a className='text-light m-5 font-bold'>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className='text-light m-5 font-bold'>About</a>
                    </Link>
                    <Link href="/contact">
                        <a className='text-light m-5 font-bold'>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Head;