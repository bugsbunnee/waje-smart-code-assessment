import React from 'react';

import { BiCheck, BiCheckCircle, BiTrash } from 'react-icons/bi';
import { Task } from '../entities';

import CollapsibleText from './CollapsibleText';


interface Props {
    task: Task;
    onDelete: () => void;
    onComplete: () => void;
}

const TaskCard: React.FC<Props> = ({ task, onComplete, onDelete }) => {
    return ( 
        <div data-testid="task-card" className="bg-white shadow-sm p-5 rounded ">
            <div className="flex items-center justify-between">
                <div className="bg-violet-100 inline rounded p-2 text-xs capitalize font-monteserrat">
                    #{task.id}
                </div>

                <button className="w-9 h-9 flex justify-center items-center bg-red-600 rounded" onClick={onDelete}>
                    <BiTrash size={20} className='text-white' />
                </button>
            </div>

            <CollapsibleText>{task.title}</CollapsibleText>
            
            {task.completed ? (
                <div className="mt-8 p-3 w-full flex justify-center items-center bg-green-300 rounded text-white font-monteserrat text-sm flex-1">
                    <BiCheckCircle size={20} className='me-2' />

                    completed
                </div>
            ) : (
                <button className="mt-8 p-3 w-full flex justify-center items-center bg-violet-500 rounded text-white" onClick={onComplete}>
                    <BiCheck size={20} />

                    <div className="font-monteserrat text-sm ms-2 flex-1">Mark as completed</div>
                </button>
            )}
        </div>
     );
};
 
export default TaskCard;