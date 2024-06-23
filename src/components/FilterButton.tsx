import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface Props {
    label: string;
    count: number;
    isActive: boolean;
    onSelect: () => void;
}

const FilterButton: React.FC<Props> = ({ label, count, isActive, onSelect }) => {
    return ( 
        <button data-testid="filter-button" className={`px-4 py-3 rounded flex justify-between items-center font-monteserrat min-w-52 ${isActive ? 'bg-violet-400' : 'bg-white'}`} onClick={onSelect}>
            {isActive ? <FaCheckCircle className='text-white' size={20} /> : null}

            <span className='text-sm font-semibold capitalize'>{label}</span>

            <div data-testid={`${label}-filter-count`} className={`${isActive ? 'bg-white' : 'bg-violet-100'} w-7 h-7 text-xs text-violet-500 font-semibold rounded-full flex justify-center items-center`}>
                {count}
            </div>
        </button>
     );
}
 
export default FilterButton;