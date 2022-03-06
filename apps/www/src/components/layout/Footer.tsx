import Link from 'next/link'

const Footer = () => (
    <footer className='w-full bg-gray-50 border-t border-gray-200 mt-12'>
        <div className='max-w-3xl mx-auto p-6 flex flex-col items-center space-y-4 text-sm'>
            <span>Let&apos;s be friend 🤗</span>
            <nav className='flex space-x-4'>
                <Link href='https://in.achrafash.com'>Linkedin</Link>
                <Link href='https://t.achrafash.com'>Twitter</Link>
                <Link href='https://git.achrafash.com'>GitHub</Link>
            </nav>
        </div>
    </footer>
)

export default Footer
