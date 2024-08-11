import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import { FormEvent, useState } from "react";
import { login } from "../api/auth";
import Separator from "../components/UI/Separator";
import googleIcon from '../assets/images/googleIcon.svg';
import { useGoogleLogin } from "@react-oauth/google";

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username.trim() || !password.trim()) return;

    const response = await login(username, password);
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
    localStorage.setItem('auth_data', response.data);
    navigate('/');
  }

  const handleSignInSuccess = async (response: any) => {
    try {
      console.log(response.code);  
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleSignInFailure = () => {
    console.log('Registration Failed');
  };

  const onGoogleSignIn = useGoogleLogin({
    flow: 'auth-code',
    ux_mode: 'popup',
    onSuccess: handleSignInSuccess,
    onError: handleSignInFailure
  });

  return (
    <AuthLayout>
      <div className='flex items-center justify-center w-full h-full'>
        <form onSubmit={onSubmit} className='w-[500px]'>
          <h2 className='text-dark text-3xl font-semibold mb-10 text-center'>
            Welcome back to Food App
          </h2>

          <button
            className='flex items-center justify-center gap-3 w-full rounded-xl px-4 py-2 border border-yellow-200 
            bg-white hover:bg-yellow-100 active:bg-yellow-200 transition duration-300 mb-10 text-lg'
            onClick={onGoogleSignIn}
          >
            <img src={googleIcon} className='w-8' alt="" />
            Enter with Google
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
            Don't have an account &nbsp;
            <Link to='/signup' className='text-primary'>Sign up</Link>
          </p>

          <button
            className='text-white bg-primary px-4 py-2 rounded-xl text-lg w-full
          hover:bg-primary-2 active:bg-blue transition duration-300'
          >
            Login
          </button>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignIn;
