import { useForm, ValidationError } from '@formspree/react'

// TODO - add a cool transition on the form submission

const EmailForm = () => {
    const [state, handleSubmit] = useForm('mvolrkob')

    if (state.succeeded) {
        return <p>Thanks for joining!</p>
    }

    return (
        <div>
            <p>
                Leave your email below if you want to be notified when I drop
                something cool
            </p>
            <form
                onSubmit={handleSubmit}
                className='border rounded-md p-1 bg-white flex space-x-1'
            >
                <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    className='flex-1 p-2 rounded focus:outline-none'
                />
                <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                />
                <button
                    type='submit'
                    disabled={state.submitting}
                    className='bg-gradient-to-t from-blue-600 to-blue-400 text-white py-2 px-4 rounded uppercase text-sm font-medium'
                >
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default EmailForm
