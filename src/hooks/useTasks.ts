import { useEffect } from "react";
import { Task } from "../entities";

import toast from "react-hot-toast";

import APIClient from "../services/httpService";
import useTaskQueryStore from "../store/tasks/store";

const apiClient = new APIClient<Task>('/todos');

interface TaskResult { 
    tasks: Task[];
    isLoading: boolean;
    error: boolean;
    onTaskDelete: (taskId: number) => void;
    markTaskAsCompleted: (taskId: number) => void;
    fetchTasks: () => Promise<void>;
}

const useTasks = (): TaskResult => {
    const { tasks, isLoading, error, setLoading, setTasks, setError } = useTaskQueryStore();

    const onTaskDelete = async (taskId: number) => {
        // store a copy of the original value
        const allTasks = tasks;

        // first delete the task from the current list
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
        
        try {
            await apiClient.delete(taskId);
        } catch (error) {
            // if something fails revert to original tasks;
            setTasks(allTasks);
            
            toast.error('Failed to delete the task');
        }
    };

    const markTaskAsCompleted = async (taskId: number) => {
        const allTasks = tasks;

        const updatedTasks = tasks.map((task) => task.id === taskId ? ({ ...task, completed: true }) : task);
        setTasks(updatedTasks);

        try {
            await apiClient.update({ id: taskId, completed: true });
        } catch (error) {
            setTasks(allTasks);
            
            toast.error('Failed to update the task');
        }
    };

    const fetchTasks = async () => {
        setLoading(true);

        try {
            const result = await apiClient.getAll();
            setTasks(result.data);
            setError(false);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return { tasks, isLoading, error, onTaskDelete, markTaskAsCompleted, fetchTasks };
};

export default useTasks;