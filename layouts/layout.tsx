import { ReactChild, ReactChildren, ReactFragment, ReactPortal } from 'react';
import Head from 'next/head';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {ExclamationIcon} from "@heroicons/react/outline";

interface LayoutProps {
    children: ReactChild | ReactChildren | ReactFragment | ReactPortal | boolean | null | undefined;
    title: string;
}

export default function Layout({
                                   children,
                                   title = '',
                               }: LayoutProps): JSX.Element {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <title>Wavy {title && `- ${title}`}</title>
                <meta name="description" content="The blazing-fast Discord bot." />
                <meta name="keywords" content="Discord,Bot,Fast" />
                <meta name="author" content="Robert S. & Contributors" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={`Wavy${title && ` - ${title}`}`} />
                <meta property="og:description" content="The blazing-fast Discord bot." />
                <meta property="og:image" content="https://wavybot.com/logo.webp" />
                <meta name="theme-color" content="#F59E0B" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ThatGuy5275" />
                <meta name="twitter:title" content={`Wavy${title && ` - ${title}`}`} />
                <meta name="twitter:description" content="The blazing-fast Discord bot."/>
                <meta name="twitter:image" content="https://wavybot.com/logo.webp"/>
            </Head>
            <div className="flex flex-col min-h-screen">
                <div className="bg-amber-500 w-full p-4 space-x-2 text-center text-gray-900">
                    <ExclamationIcon className="w-8 h-8 inline-block"/>
                    <h5 className="title-font font-medium text-md inline-block">This site is still in development. Some links may be broken and text and/or images may be missing.</h5>
                </div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
}