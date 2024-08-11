import { FormEvent, useState } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import { Link } from 'react-router-dom';
import { register } from '../api/auth';
import googleIcon from '../assets/images/googleIcon.svg';
import Separator from '../components/UI/Separator';
import { useGoogleLogin } from '@react-oauth/google';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username.trim() || !password.trim()) return;
    const response = await register(username, password);
    console.log('Response: ', response);    
  }

  const handleRegisterSuccess = async (response: any) => {
    try {
      console.log(response.code);      
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleRegisterFailure = () => {
    console.log('Registration Failed');
  };

  const onGoogleSignUp = useGoogleLogin({
    flow: 'auth-code',
    ux_mode: 'popup',
    onSuccess: handleRegisterSuccess,
    onError: handleRegisterFailure
  });

  return (
    <AuthLayout>
      <div className='flex items-center justify-center w-full h-full'>
        <form onSubmit={onSubmit} className='w-[500px]'>
          <h2 className='text-dark text-3xl font-semibold mb-10 text-center'>
            Create your own Food application
          </h2>

          <button
            className='flex items-center justify-center gap-3 w-full rounded-xl px-4 py-2 border border-yellow-200 
            bg-white hover:bg-yellow-100 active:bg-yellow-200 transition duration-300 mb-10 text-lg'
            onClick={onGoogleSignUp}
          >
            <img src={googleIcon} className='w-8' alt="" />
            Sign up with Google
          </button>

          <Separator />

          <div className='mb-5'>
            <label className='text-lg text-grey-1 font-semibold'>Username</label>
            <input
              type='text'
              className='w-full px-4 py-2 rounded-xl border border-grey-3'
              placeholder='Username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className='mb-5'>
            <label className='text-lg text-grey-1 font-semibold'>Password</label>
            <input
              type='password'
              className='w-full px-4 py-2 rounded-xl border border-grey-3'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
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
