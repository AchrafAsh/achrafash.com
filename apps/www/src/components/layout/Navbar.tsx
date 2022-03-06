import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => (
    <header className='w-full mb-12'>
        <div className='max-w-6xl mx-auto flex justify-between items-center space-x-12 p-4'>
            <Link href='/'>
                <a className='text-xs uppercase text-gray-800 font-semibold hover:no-underline'>
                    Achraf Ait Sidi Hammou
                </a>
            </Link>
            <div className='w-8 h-8 rounded-full overflow-hidden'>
                <Image
                    src='/profile_pic.jpg'
                    alt='Profile Picture'
                    width={120}
                    height={120}
                />
            </div>
        </div>
        <hr />
        <div className='p-4 max-w-6xl mx-auto'>
            <nav className='flex justify-between space-x-4 uppercase text-xs max-w-md'>
                <Link href='/'>
                    <a className='text-gray-800 hover:no-underline font-medium'>
                        About
                    </a>
                </Link>
                <Link href='/research'>
                    <a className='text-gray-800 hover:no-underline font-medium'>
                        Research
                    </a>
                </Link>
                <Link href='/engineering-design'>
                    <a className='text-gray-800 hover:no-underline font-medium'>
                        Engineering & Design
                    </a>
                </Link>
                <Link href='/drops'>
                    <a className='text-gray-800 hover:no-underline font-medium'>
                        Drops
                    </a>
                </Link>
            </nav>
        </div>
        <hr />
    </header>
)

export default Navbar
