import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }: { children: any }) => {
    return (
        <>
            <Head>
                <title>Irruption Lab</title>
                <meta name="description" content="Building applications for Web3 democratization" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen mx-auto max-w-2xl flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 sm:px-6">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
