// import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'

// TODO - add a cool transition on the form submission

const EmailForm = () => {
    return (
        <div className='max-w-sm'>
            <p>
                Leave your email below to be notified when I publish something
                new (articles, applications and other exciting things!)
            </p>
            <form
                action='https://buttondown.email/api/emails/embed-subscribe/Achraf'
                method='POST'
                target='popupwindow'
                onSubmit={() =>
                    window.open(
                        'https://buttondown.email/Achraf',
                        'popupwindow'
                    )
                }
                className='border rounded-md p-1 bg-white flex space-x-1'
            >
                {/* <input type='email' name='email' id='bd-email' /> */}

                <input
                    id='bd-email'
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    className='flex-1 p-1 rounded focus:outline-none text-gray-800'
                />
                <button
                    type='submit'
                    className='bg-gradient-to-t from-blue-600 to-blue-400 text-white py-2 px-4 rounded uppercase text-sm font-medium'
                >
                    Subscribe
                </button>
            </form>
            {/* <form
                onSubmit={handleSubmit}
                className='border rounded-md p-1 bg-white flex space-x-1'
            >
                <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                />
            </form> */}
        </div>
    )
}

export default EmailForm
