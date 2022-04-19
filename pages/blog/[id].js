import Head from "next/head"
import Script from "next/script"
import { useRouter } from 'next/router';
import { Html } from "next/document"
import { useState } from "react"
const Blog = () => {
    const router = useRouter()
    const { id } = router.query
    const [name, setName] = useState("Rasel")
    return (
        <div id="banner" className="rasel">

            <Head>
                <title >Blog Page</title>
                {/* <script src="/index.js"></script> */}
            </Head>
            <Script id="banner" src="/index.js" strategy="lazyOnload"
                onLoad={
                    () => {
                        window.a = "Rasel"
                        setName("Rabina")
                        console.log("Onload")
                    }
                }
                onError={
                    (error) => console.log("My Error",error)
                }
            >

            </Script>

            <h1>{name} Hello Blog {id}</h1>
        </div>
    );
};

export default Blog;