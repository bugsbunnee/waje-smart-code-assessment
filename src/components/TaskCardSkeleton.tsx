import React from 'react';

const TaskCardSkeleton: React.FC = () => {
    return ( 
        <div data-testid="task-skeleton" className="bg-white shadow-sm p-5 rounded ">
            <div className="flex items-center justify-between">
                <div className="bg-neutral-200 inline rounded p-2 w-9 h-9">
                </div>

                <div className="w-9 h-9 flex justify-center items-center bg-neutral-200 rounded">
                </div>
            </div>

            <div className='w-full h-12 bg-neutral-200 my-3'></div>
            
            <div className="mt-8 p-3 w-full flex justify-center items-center bg-neutral-200 rounded">
            </div>
        </div>
     );
};
 
export default TaskCardSkeleton;