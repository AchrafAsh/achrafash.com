import Link from 'next/link'

const Footer = () => (
    <footer className='w-full bg-gray-50 border-t border-gray-200 mt-12'>
        <div className='max-w-3xl mx-auto p-6 flex flex-col items-center space-y-4 text-sm'>
            <span>Let&apos;s be friend 🤗</span>
            <nav className='flex space-x-4'>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://linkedin.com/in/achraf-aitsidihammou'
                >
                    Linkedin
                </a>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://twitter.com/AchrafTOTW'
                >
                    Twitter
                </a>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/achrafash'
                >
                    GitHub
                </a>
            </nav>
        </div>
    </footer>
)

export default Footer
