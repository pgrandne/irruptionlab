'use client'

import '../styles/globals.css';
import { Plus_Jakarta_Sans } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import { Footer, Navbar } from '../components';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en" className={jakarta.className}>
        <body>
            <ThemeProvider enableSystem attribute="class">
                <div className="overflow-hidden">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </ThemeProvider>
        </body>
    </html>
);

export default RootLayout;