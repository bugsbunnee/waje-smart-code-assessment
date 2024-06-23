import React, { useEffect } from 'react';
import { motion } from "framer-motion";

import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserLogin, schema } from './schema';
import { FaEnvelope, FaKey, FaSpinner } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import ErrorMessage from '../../../components/ErrorMessage';
import Input from '../../../components/Input';

import loginImage from '../../../assets/login.png';
import toast from 'react-hot-toast';
import useAuthStore from '../store';

const LoginPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<UserLogin>({ resolver: zodResolver(schema), mode: 'onChange' });

    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuthStore();

    const simulateLogin = (userLogin: UserLogin) => {
        const testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZmlyc3ROYW1lIjoiTWFyY2VsIiwibGFzdE5hbWUiOiJDaHVrd3VtYSIsImVtYWlsIjoibWFyY2VsLmNodWt3dW1hMDBAZ21haWwuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.lzo9lo0o06ZQRMxsCHNuhmKR9jIXrYfOQDHkUvne2cc';
        
        return new Promise((resolve, reject) => (
            setTimeout(() => {
                if (userLogin.email === import.meta.env.VITE_TEST_EMAIL && userLogin.password === import.meta.env.VITE_TEST_PASSWORD) resolve(testToken);
                else reject('Invalid Details Provided! Kindly check the README file.');
            }, 3000)));
    };

    const onLogin = async (userData: UserLogin) => {
        try {
            const token = await simulateLogin(userData) as string;
            auth.login(token);

            const targetRoute = location.state ? location.state.from : '/tasks';
            navigate(targetRoute);
        } catch (error) {
            toast.error(error as string);
        }
    };

    useEffect(() => {
        if (auth.user) navigate('/tasks');
    }, [auth.user, navigate]);

    return ( 
        <div className="bg-neutral-100 flex justify-center items-center h-screen w-screen px-20">
            <div className="flex justify-center items-center h-full flex-1">
                <img src={loginImage} alt='Login' />
            </div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white w-2/5 rounded border-2 border-neutral-200 p-10"
            >
                <div>
                    <div className='text-xl font-bold font-monteserrat'>Welcome to</div>
                    <div className='text-3xl font-black font-monteserrat text-violet-700'>Task It</div>
                </div>

                <div className="my-10">
                    <button onClick={() => toast.success('Coming soon. In the mean time, use your email')} className="bg-white w-full border flex justify-center items-center h-16 rounded text-sm text-gray-800 font-monteserrat">
                        <span className="me-2"><FcGoogle size={30} /></span> Login with Google
                    </button>

                    <div className="flex justify-center items-center my-8">
                        <div className="h-px w-full bg-gray-400"></div>
                        <div className="text-gray-400 px-6 font-monteserrat text-xs font-medium">OR</div>
                        <div className="h-px w-full bg-gray-400"></div>
                    </div>

                    <form onSubmit={handleSubmit(onLogin)}>
                        <div>
                            <Input type="email" label='Email' placeholder='Enter your email address' {...register('email')} Icon={FaEnvelope} />
                            <ErrorMessage>{errors.email?.message}</ErrorMessage>
                        </div>
                        
                        <div className="mt-6">
                            <Input type="password" label='Password' placeholder='Enter your password' {...register('password')} Icon={FaKey} />
                            <ErrorMessage>{errors.password?.message}</ErrorMessage>
                        </div>

                        <button type='submit' disabled={isSubmitting} className="disabled:bg-gray-300 font-monteserrat rounded h-14 px-5 bg-violet-500 w-full flex justify-center items-center mt-6 text-center text-white text-xs font-semibold">
                            {isSubmitting ? <FaSpinner className='animate-spin me-3' /> : null}
                            Login
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
     );
};
 
export default LoginPage;