import React from 'react';

import { BiRefresh } from 'react-icons/bi';

import CollapsibleText from './CollapsibleText';


interface Props {
    onRefresh: () => void;
}

const ErrorCard: React.FC<Props> = ({ onRefresh }) => {
    return ( 
        <div data-testid="error-card" className="bg-white mb-5 shadow-sm p-5 rounded ">
            <CollapsibleText>An Error Ocurred.</CollapsibleText>
            
            <button className="mt-8 p-3 w-full flex justify-center items-center bg-red-500 rounded text-white" onClick={onRefresh}>
                <BiRefresh size={20} />

                <div className="font-monteserrat text-sm ms-2 flex-1">Refresh</div>
            </button>
        </div>
     );
};
 
export default ErrorCard;