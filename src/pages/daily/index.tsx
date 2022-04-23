import { Layout } from '@/components/layout'
import type { NextPage } from 'next'
import Link from 'next/link'

const DailyIndexPage: NextPage<{ posts: any[] }> = ({ posts }) => (
    <Layout>
        <main className='max-w-6xl mx-auto p-4 flex flex-col space-y-12'>
            {posts &&
                posts.map((post, index) => (
                    <Link key={index} href={`daily/${post.slug}`} passHref>
                        <div className='cursor-pointer max-w-lg'>
                            <small className='uppercase text-gray-400'>
                                {new Date(post.publishedAt).toDateString()}
                            </small>
                            <h4>{post.title}</h4>
                            <p>{post.excerpt}</p>
                        </div>
                    </Link>
                ))}
        </main>
    </Layout>
)

function getAllPosts() {
    return [
        {
            slug: '001',
            title: 'Taking a Hard Decision',
            excerpt:
                "I've always struggled with focus. I'm always juggling 5 different projects at the same time, never really committing to one.",
            publishedAt: new Date('2022-4-19').toJSON()
        },
        {
            slug: '002',
            title: 'Habits over Projects',
            excerpt:
                'Have you ever felt in a state of flow... across multiple months? I was lucky enough to experience that. And I miss it a lot.',
            publishedAt: new Date('2022-4-20').toJSON()
        },
        {
            slug: '003',
            title: 'What Game Are You Playing?',
            excerpt:
                "If you wanna win in life you gotta know what game you're playing. There are many games out there",
            publishedAt: new Date('2022-4-21').toJSON()
        }
    ]
}

export const getStaticProps = () => {
    const posts = getAllPosts()

    return {
        props: { posts }
    }
}

export default DailyIndexPage
