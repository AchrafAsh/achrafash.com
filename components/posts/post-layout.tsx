import { FC } from 'react'
import Link from 'next/link'
import EmailForm from '../email-form'
import Layout from '../layout'

interface ArticleLayoutProps {
    publishedAt: Date
    title: string
    toc: string[]
}

const PostLayout: FC<ArticleLayoutProps> = ({
    title,
    publishedAt,
    toc,
    children
}) => (
    <Layout>
        <main className='max-w-6xl mx-auto p-4 flex space-x-20'>
            <article className='max-w-3xl flex-1'>
                <header className='mb-12'>
                    <time
                        className='text-xs font-light uppercase text-gray-500'
                        dateTime={publishedAt.toDateString()}
                    >
                        {publishedAt.toDateString()}
                    </time>
                    <h1 className='mt-2'>{title}</h1>
                </header>

                <div>{children}</div>
            </article>

            <div className='relative hidden lg:block'>
                <aside className='mt-32 py-12 top-0 sticky'>
                    <nav className='p-6 rounded-md bg-gray-100 mb-6'>
                        <h4 className='text-xs uppercase font-semibold text-gray-700'>
                            Table of contents
                        </h4>

                        <ul className='space-y-2 text-sm font-light'>
                            {/* // TODO - manage the state of active link using useRef */}
                            {toc.map((el, idx) => (
                                <li key={idx} className='flex items-center'>
                                    <div className='w-4'>
                                        <div className='w-1.5 h-1.5 rounded-full bg-blue-500' />
                                    </div>
                                    <Link href='#'>
                                        {/* FIXME - add the right link */}
                                        <a className='hover:no-underline text-gray-900 font-normal'>
                                            {el}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <hr className='mb-6' />
                    <EmailForm />
                </aside>
            </div>
        </main>
    </Layout>
)

export default PostLayout
