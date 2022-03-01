import { FC } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

const Layout: FC<{ title?: string }> = ({ children, title }) => (
    <>
        <Head>
            <title>{title || 'Achraf AIT SIDI HAMMOU'}</title>
        </Head>
        <Navbar />
        <>{children}</>
        <Footer />
    </>
)

export default Layout
