import React from 'react';
import { CgChevronDoubleLeft, CgChevronDoubleRight } from 'react-icons/cg';

import usePagination from '../hooks/usePagination';

interface Props {
    onPageChange: (page: number) => void;
    itemsCount: number;
    pageSize: number;
    currentPage: number;
}

const Pagination: React.FC<Props> = ({ currentPage, onPageChange, itemsCount, pageSize }) => {
	const pagination = usePagination(itemsCount, pageSize);
	if (!pagination) return null;

	return (
        <ul className='flex flex-row'>
            {pagination.previousRangeVisible ? (
                    <li className='list-none'>
                        <button onClick={pagination.onPreviousRange} className='flex items-center justify-center border-0 rounded w-9 h-9 text-sm me-3 bg-white text-violet-500'>
                            <CgChevronDoubleLeft size={20} />
                        </button>
                    </li>
                ) : null}

            {pagination.pagesToDisplay.map((page: number) => (
                <li className='list-none' key={page}>
                    <button 
                        className={`flex items-center justify-center border-0 rounded w-9 h-9 text-sm me-3 ${page === currentPage ? 'bg-violet-500 text-white' : 'bg-white text-violet-500'}`} 
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                </li>
            ))}

            {pagination.nextRangeVisible ? (
                <li className='list-none'>
                    <button onClick={pagination.onNextRange} className='flex items-center justify-center border-0 rounded w-9 h-9 text-sm me-3 bg-white text-violet-500'>
                        <CgChevronDoubleRight size={20} />
                    </button>
                </li>
            ) : null}
        </ul>
	);
};

export default Pagination;
