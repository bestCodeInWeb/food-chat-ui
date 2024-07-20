import { FormEvent } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <AuthLayout>
      <div className='flex items-center justify-center w-full h-full'>
        <form onSubmit={onSubmit} className='w-[500px]'>
          <h2 className='text-dark text-3xl font-semibold mb-10 text-center'>
            Create your own Food application
          </h2>

          <div className='mb-5'>
            <label className='text-lg text-grey-1 font-semibold'>Email</label>
            <input
              type='email'
              className='w-full px-4 py-2 rounded-xl border border-grey-3'
              placeholder='Email'
            />
          </div>

          <div className='mb-5'>
            <label className='text-lg text-grey-1 font-semibold'>Password</label>
            <input
              type='password'
              className='w-full px-4 py-2 rounded-xl border border-grey-3'
              placeholder='Password'
            />
          </div>

          <p className='mb-5 text-center'>
            Already have an account &nbsp;
            <Link to='/signin' className='text-primary'>Sign in</Link>
          </p>

          <button
            className='text-white bg-primary px-4 py-2 rounded-xl text-lg w-full
          hover:bg-primary-2 active:bg-blue transition duration-300'
          >
            Create Food App
          </button>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp;
