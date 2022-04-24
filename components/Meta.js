import React from 'react';
import Head from "next/head"
const Meta = ({ description, keywords }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charset="UTF-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="Rasel" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
        </>
    );
};

Meta.defaultProps = {
    title: "RaselBlog",
    keywords: "Blogs,NFTs,Bitcoins",
    description:'Be Upload Latest Blog'
}

export default Meta;