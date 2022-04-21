import React from 'react';
import Link from "next/link"
import styles from "../styles/nvabar.module.scss"
const Navbar = () => {
    return (
        <div className="navbar  flex items-center justify-center">
            <ul className="flex items-center justify-center gap-12 m-5 text-2xl">
                <li>
                    <Link  href="/">
                        <a >Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>

                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;