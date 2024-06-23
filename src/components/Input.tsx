import React, { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    Icon: IconType;
}

const Input = React.forwardRef<HTMLInputElement, Props>(({ Icon, ...otherProps}, ref) => {
    return ( 
        <div className='bg-neutral-200 rounded h-16 px-5 w-full flex flex-row items-center'>
            <div className='me-5'>
                <Icon size={23} />
            </div>
            <div className='flex flex-col flex-1'>
                <label htmlFor={otherProps.name} className='font-monteserrat font-semibold text-xs'>{otherProps.label}</label>
                <input {...otherProps} type={otherProps.type} ref={ref} name={otherProps.name} id={otherProps.name} className='font-monteserrat mt-1 w-full bg-transparent font-semibold text-sm outline-0' />
            </div>
        </div>
     );
})
 
export default Input;