import React from 'react';
import FilterButton from './FilterButton';
import { TASK_STATUS } from '../utils/constants';
import useTaskQueryStore from '../store/tasks/store';

const TaskFilter: React.FC = () => {
    const { taskQuery, tasks, setSelectedStatus } = useTaskQueryStore();

    return ( 
        <div className="flex items-center">
            <div className="me-4">
                <FilterButton
                    isActive={!taskQuery.selectedStatus} 
                    label="All" 
                    count={tasks.length} 
                    onSelect={() => setSelectedStatus('')}
                />
            </div>

            <div className="me-4">
                <FilterButton 
                    isActive={taskQuery.selectedStatus === TASK_STATUS.ACTIVE} 
                    label='Active' 
                    count={tasks.filter((task) => !task.completed).length} 
                    onSelect={() => setSelectedStatus(TASK_STATUS.ACTIVE)}
                />
            </div>
            
            <div className="me-4">
                <FilterButton 
                    isActive={taskQuery.selectedStatus === TASK_STATUS.COMPLETED} 
                    label='Completed'
                    count={tasks.filter((task) => task.completed).length} 
                    onSelect={() => setSelectedStatus(TASK_STATUS.COMPLETED)}
                />
            </div>
        </div>
     );
}
 
export default TaskFilter;