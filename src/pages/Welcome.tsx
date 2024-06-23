import React from 'react';
import { MdStart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
    const navigate = useNavigate();

    return ( 
        <div className='font-monteserrat h-screen flex flex-col'>
            <header className='flex justify-between items-center p-10'>
                <div className="uppercase font-black text-lg">Task <span className="text-violet-500">It</span></div>
                <button onClick={() => navigate('/tasks')} className='py-3 px-5 text-white rounded bg-violet-500 text-sm font-semibold'>
                    Manage my Tasks
                </button>
            </header>

            <div className="h-full bg-white flex justify-start items-center">
                <div className='flex-1 p-20'>
                    <div className="max-w-2xl">
                        <h1 className='text-4xl font-bold'><span className='text-violet-500'>Create, Manage and Track</span> your Tasks.</h1>

                        <p className='text-lg font-semibold mt-10 mb-14 bg-violet-50 p-5 rounded'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>

                        <button onClick={() => navigate('/tasks')} className='p-5 text-white rounded bg-violet-500 text-sm font-semibold flex items-center justify-center'>
                            <MdStart className='me-3' />

                            Get Started with Task It
                        </button>
                    </div>
                </div>
                <div className="flex-1 h-full bg-contain bg-center bg-no-repeat bg-[url('./assets/login.png')]">
                </div>
            </div>
        </div>
     );
}
 
export default Welcome;