import React, { useMemo } from 'react';
import _ from 'lodash';

import { paginate } from '../utils/utils';
import { BiCategory } from 'react-icons/bi';
import { TASK_STATUS } from '../utils/constants';

import ErrorCard from './ErrorCard';
import Pagination from './Pagination';
import TaskCard from './TaskCard';
import TaskCardSkeleton from './TaskCardSkeleton';
import TaskFilter from './TaskFilter';

import useTasks from '../hooks/useTasks';
import useTaskQueryStore from '../store/tasks/store';

const TaskList: React.FC = () => {
    const { isLoading, tasks, error, fetchTasks, onTaskDelete, markTaskAsCompleted } = useTasks();
    const { taskQuery, setCurrentPage, setPageSize } = useTaskQueryStore();

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPageSize(+event.currentTarget.value);
    };

    const paginatedTasks = useMemo(() => {
        let filteredTasks = tasks;
        
        if (taskQuery.searchQuery) {
            filteredTasks = tasks.filter((task) => _.get(task, 'title').toLowerCase().indexOf(taskQuery.searchQuery.toLowerCase()) !== -1);
        }

        if (taskQuery.selectedStatus) {
            filteredTasks = filteredTasks.filter((task) => {
                if (taskQuery.selectedStatus === TASK_STATUS.ACTIVE)
                    return !task.completed;

                if (taskQuery.selectedStatus === TASK_STATUS.COMPLETED)
                    return task.completed;
            });
        }

        const sortedTasks = _.orderBy(filteredTasks, ['id'], ['asc']);
        const paginatedTasks = paginate(sortedTasks, taskQuery.currentPage, taskQuery.pageSize)

        return paginatedTasks;
    }, [tasks, taskQuery]);

    return ( 
        <div data-testid="task-list" className="bg-neutral-100 w-full p-10">
            <div className="bg-white rounded p-4 flex flex-row items-center w-80 mb-10">
                <BiCategory size={20} />
                
                <select className='w-full ms-4 bg-transparent font-monteserrat text-sm outline-0' value={taskQuery.pageSize} onChange={handlePageSizeChange}>
                    <option value="">Select Page Size</option>

                    {_.range(1, 31).map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </div>

            <TaskFilter />

            <div className="my-8">
                {error 
                    ? <ErrorCard onRefresh={fetchTasks} />
                    : null}
                
                <div className="grid grid-cols-4 gap-4">
                    {isLoading 
                        ? (
                            <>
                                {_.range(1, 6).map((prefill) => (
                                    <TaskCardSkeleton key={prefill} />
                                ))}
                            </>
                        ) : null}
                    
                    {paginatedTasks.map((task) => (
                        <TaskCard 
                            task={task}
                            key={task.id} 
                            onDelete={() => onTaskDelete(task.id)} 
                            onComplete={() => markTaskAsCompleted(task.id)} 
                        />
                    ))}
                </div>

                <div className="flex justify-end items-center my-10">
                    <Pagination 
                        itemsCount={tasks.length} 
                        pageSize={taskQuery.pageSize} 
                        currentPage={taskQuery.currentPage} 
                        onPageChange={(page) => setCurrentPage(page)} 
                    />
                </div>
            </div>
        </div>
     );
};

export default TaskList;