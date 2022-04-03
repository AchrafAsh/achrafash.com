import EmailForm from 'components/email-form'
import Layout from 'components/layout'

const About = () => {
    return (
        <Layout>
            <main className='max-w-6xl mx-auto p-4 flex flex-col space-y-20 md:flex-row md:space-y-0 md:space-x-20'>
                <div id='main-text' className='max-w-2xl'>
                    <p>Hey, Achraf here 👋</p>
                    <p>
                        I&apos;m an undergraduate student{' '}
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.ensta-paris.fr/en'
                        >
                            @ENSTA Paris
                        </a>{' '}
                        in Applied Math. Currently doing a gap year to explore
                        Deep Learning research and engineering.
                    </p>

                    <p>
                        Last summer, I worked on Graph Neural Networks at
                        Polytechnique and in Fall 2021 I was at Criteo AI Lab
                        working on Recommendation Systems where I contributed to
                        a KDD paper submission - my first one 🏆
                    </p>

                    <p>
                        Long term, I want to change how the healthcare system
                        work. It&apos;s broken.
                    </p>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://zoomie.achrafash.com'
                    >
                        Feel free to join me for a virtual coffee!
                    </a>
                </div>
                <div id='alert-form'>
                    <EmailForm />
                </div>
            </main>
        </Layout>
    )
}

export default About
