import React from 'react';
import Footer from './Footer';
import Head from './Head';

const Layout = ({ children }) => {
    return (
        <>
            <Head />
            {children}
            <Footer />
        </>
    );
};

export default Layout;