import React from 'react';

import { BiLogOut } from 'react-icons/bi';
import { PiPlus } from 'react-icons/pi';
import { FaTasks } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

import useAuthStore from '../store/auth/store';
import useTaskQueryStore from '../store/tasks/store';
import AddTask from '../store/tasks/MyTasks/AddTask';

const NavBar: React.FC = () => {
    const auth = useAuthStore();
    const navigate = useNavigate();
    const taskStore = useTaskQueryStore();

    const handleLogout = () => {
        auth.logout();
        navigate('/login');
    };

    return ( 
        <div className='bg-white w-1/6 border-r flex flex-col font-monteserrat'>
            <div className="h-28 px-8 bg-white border-b flex justify-between items-center">
                <h2 className='font-black text-xl uppercase'>Task <span className='text-violet-500'>It</span></h2>
            </div>
            <div className='p-5 border-b h-full'>
                <NavLink className={({ isActive }) => `p-2 my-4 w-full rounded flex items-center text-sm ${isActive ? 'bg-violet-100' : ''}`} to='/tasks'>
                    <div className="bg-violet-500 w-8 h-8 flex justify-center rounded items-center me-3">
                        <FaTasks className='text-violet-100' size={20}/>
                    </div>

                    <span className='font-semibold'>Tasks</span>
                </NavLink>
            </div>
            <div className='p-5'>
                <div className="p-5 rounded bg-blue-100">
                    <h2 className='font-semibold'>Don't have any new task?</h2>

                    <button 
                        className='flex items-center text-sm bg-blue-300 p-2 mt-3 rounded'
                        onClick={() => taskStore.setAddNewTask(true)}
                    >
                        <PiPlus className='me-2' />
                        <span className='font-medium'>Create new</span>
                    </button>
                </div>

                <button onClick={handleLogout} className='p-2 w-full mt-4 rounded bg-red-100 flex items-center text-sm'>
                    <div className="bg-red-500 w-8 h-8 flex justify-center rounded items-center me-3">
                        <BiLogOut className='text-red-100' size={20}/>
                    </div>

                    <span className='font-semibold'>Logout</span>
                </button>
            </div>

            {taskStore.addNewTask ? <AddTask /> : null}
        </div>
     );
}
 
export default NavBar;