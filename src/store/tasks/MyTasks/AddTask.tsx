import React from 'react';
import { motion } from 'framer-motion';

import { zodResolver } from '@hookform/resolvers/zod';
import { MdTitle } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { NewTask, schema } from './schema';
import { FaSpinner } from 'react-icons/fa';

import Input from '../../../components/Input';
import ErrorMessage from '../../../components/ErrorMessage';

import useTaskQueryStore from '../store';
import APIClient from '../../../services/httpService';
import toast from 'react-hot-toast';

const AddTask: React.FC = () => {
    const { register, reset, handleSubmit, formState: { errors, isSubmitting }} = useForm<NewTask>({ resolver: zodResolver(schema), mode: 'onChange' });
    const { setAddNewTask } = useTaskQueryStore();

    const handleNewTaskCreation = async ({ title }: NewTask) => {
        try {
            const apiClient = new APIClient('/todos');
            await apiClient.post({ title, completed: false });

            toast.success('Post Created Successfully!');

            reset();
            setAddNewTask(false);
        } catch (error) {
            toast.error('An error occurred');
        }
    };

    return ( 
        <div className="w-screen h-screen bg-black bg-opacity-50 border top-0  right-0 left-0 bottom-0 fixed flex justify-center items-center z-10 font-monteserrat">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="bg-white w-2/5 h-fit rounded z-50"
            >
                <form className='p-8' onSubmit={handleSubmit(handleNewTaskCreation)}>
                    <h1 className="text-lg font-semibold mb-4">Create New Task</h1>

                    <div>
                        <Input type="text" label='Title' placeholder='Enter task title' {...register('title')} Icon={MdTitle} />
                        <ErrorMessage>{errors.title?.message}</ErrorMessage>
                    </div>
                    
                    <button type='submit' disabled={isSubmitting} className="disabled:bg-gray-300 font-monteserrat rounded h-14 px-5 bg-violet-500 w-full flex justify-center items-center mt-6 text-center text-white text-xs font-semibold">
                        {isSubmitting ? <FaSpinner className='animate-spin me-3' /> : null}
                        Add
                    </button>

                    <button 
                        type='button' 
                        className='text-red-500 font-semibold text-sm mt-4 text-center w-full'
                        onClick={() => setAddNewTask(false)}
                    >
                        Cancel
                    </button>
                </form>
            </motion.div>
        </div>
     );
}
 
export default AddTask;