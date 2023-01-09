import '../styles/globals.css';
import { Plus_Jakarta_Sans } from '@next/font/google';
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en" className={jakarta.className}>
        <body>{children}</body>
    </html>
);

export default RootLayout;