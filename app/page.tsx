'use client'

import { ThemeProvider } from 'next-themes';
import { Footer, Navbar } from '../components';

import { About, Explore, GetStarted, Hero, Insights, WhatsNew } from '../sections';

const Page = () => (
    <ThemeProvider enableSystem attribute="class">
        <div className="overflow-hidden">
            <Navbar />
            <Hero />
            <div className="relative">
                <About />
                <div className="gradient-03 z-0" />
                <Explore />
            </div>
            <div className="relative">
                <Insights />
                <div className="gradient-04 z-0" />
            </div>
            <div className="relative">
                <GetStarted />
                <div className="gradient-04 z-0" />
                <WhatsNew />
            </div>
            <Footer />
        </div >
    </ThemeProvider>
);

export default Page;
