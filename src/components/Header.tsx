import React from 'react';
import { FaBook } from 'react-icons/fa';

import useAuthStore from '../store/auth/store';
import useTaskQueryStore from '../store/tasks/store';

const Header: React.FC = () => {
    const { user } = useAuthStore();
    const { tasks } = useTaskQueryStore();

    return ( 
        <header className="py-6 px-8 bg-white border-b flex justify-between items-center">
            <h1 className='text-2xl font-bold font-monteserrat'>
                Welcome, <span className="text-violet-500">{user?.firstName}</span>
            </h1>

            <div className="border rounded p-4 flex items-center justify-center">
                <FaBook className='text-violet-500'/>
                
                <div className='font-monteserrat text-sm font-semibold ms-3'>{tasks.length} total tasks</div>
            </div>
        </header>
    );
}
 
export default Header;