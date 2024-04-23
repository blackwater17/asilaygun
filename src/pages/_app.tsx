import { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/styles/styles.scss';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {

    const router = useRouter();
    const isAboutPage = router.pathname === '/about';

    useEffect(() => {
        const element = document.body;
        if (element && isAboutPage) {
            element.style.backgroundImage = "linear-gradient(to right, #2C5364, #203A43, #0F2027)";
        } else if (element && !isAboutPage) {
            element.style.backgroundImage = ""
        }
    }, [isAboutPage]);

    return (
        <div className="app-wrapper">
            <Head>
                <link rel="icon" href="./favicon.ico" />
                <title>Portfolio</title>
            </Head>
            <Component {...pageProps} />
        </div>
    );
}

export default App;
