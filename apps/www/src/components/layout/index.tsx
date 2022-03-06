import { FC } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

const Layout: FC<{ title?: string }> = ({ children, title }) => (
    <div className='min-h-screen flex flex-col'>
        <Head>
            <title>{title || 'Achraf AIT SIDI HAMMOU'}</title>
        </Head>
        <Navbar />
        <div className='flex-1'>{children}</div>
        <Footer />
    </div>
)

export default Layout
