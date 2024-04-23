import Link from 'next/link';
import '../app/globals.css';
import Header from "../app/components/Header"

export default function Home() {

    return (
        <div className="home-content-container">

            <div className="content">
                <div className="content-title content-text">Hello, I&apos;m Asil Aygün.</div>
                <div className="content-sec content-text">I am an aspiring Frontend developer.</div>
                <Link href="/portfolio">
                    View My Portfolio
                </Link>
            </div>

            <Header />
        </div>
    );
}
