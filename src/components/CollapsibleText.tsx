import React, { useState } from 'react';
import { TEXT_LIMIT } from '../utils/constants';

interface Props {
    children: string;
}

const CollapsibleText: React.FC<Props> = ({ children }) => {
    const [isCollapsed, setCollapsed] = useState(false);

    if (children.length <= TEXT_LIMIT) return <h2 className='text-md mt-6 font-semibold font-monteserrat capitalize'>{children}</h2>;

    return (
        <>
            <h2 className='text-md mt-6 font-semibold font-monteserrat capitalize'>
                {isCollapsed ? children : children.substring(0, TEXT_LIMIT) + '...'}
            </h2>
            <button className='bg-yellow-500 font-monteserrat font-bold text-xs p-2 rounded' onClick={() => setCollapsed(prev => !prev)}>
                {isCollapsed ? 'Show Less' : 'Read More'}
            </button>
        </>
    )
    
}
 
export default CollapsibleText;