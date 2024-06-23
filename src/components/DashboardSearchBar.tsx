import React from 'react';

import { BiPlus, BiUser } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { FaTags } from 'react-icons/fa';

import useTaskQueryStore from '../store/tasks/store';

const DashboardSearchBar: React.FC = () => {
    const { taskQuery, setSearchQuery, setCurrentPage, setAddNewTask } = useTaskQueryStore();

    const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1);
    };

    return ( 
        <div className="h-28 px-8 bg-white border-b flex justify-between items-center">
            <div className="bg-neutral-200 rounded p-4 flex flex-row items-center w-80">
                <CiSearch size={20} />
                <input 
                    type="text" 
                    className='w-full bg-transparent mx-4 font-monteserrat text-sm outline-0' 
                    placeholder='Enter task title to search'
                    value={taskQuery.searchQuery}
                    onChange={handleSearchQueryChange} 
                />
                <FaTags size={20} />
            </div>

            <div className='flex justify-center items-center'>
                <button onClick={() => setAddNewTask(true)} className='bg-violet-500 rounded w-44 flex justify-center items-center p-4 font-monteserrat text-xs font-semibold text-white'>
                    <div className="me-2">
                        <BiPlus />
                    </div>

                    Add new task
                </button>

                <div className="bg-neutral-200 w-12 h-12 ms-3 rounded flex justify-center items-center">
                    <BiUser className='text-violet-500' size={25} />
                </div>
            </div>
        </div>
     );
}
 
export default DashboardSearchBar;