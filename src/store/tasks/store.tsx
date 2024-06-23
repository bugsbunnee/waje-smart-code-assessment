import { create } from 'zustand';
import { Task } from '../../entities';

interface TaskQuery {
    currentPage: number;
    pageSize: number;
    selectedStatus: string;
    searchQuery: string;
}

export interface TaskStore {
    tasks: Task[];
    isLoading: boolean;
    error: boolean;
    addNewTask: boolean;
    taskQuery: TaskQuery;
    setAddNewTask: (addNewTask: boolean) => void;
    setTasks: (tasks: Task[]) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: boolean) => void;
    setCurrentPage: (page: number) => void;
    setPageSize: (size: number) => void;
    setSelectedStatus: (status: string) => void;
    setSearchQuery: (query: string) => void;
}

const useTaskQueryStore = create<TaskStore>((set) => ({
    tasks: [],
    isLoading: false,
    error: false,
    addNewTask: false,
    taskQuery: {
        currentPage: 1,
        pageSize: 12,
        selectedStatus: '',
        searchQuery: ''
    },
    setAddNewTask: (addNewTask) => set(() => ({ addNewTask })),
    setTasks: (tasks) => set(() => ({ tasks })),
    setLoading: (isLoading) => set(() => ({ isLoading })),
    setError: (error) => set(() => ({ error })),
    setCurrentPage: (page) => set((store) => ({ taskQuery: { ...store.taskQuery, currentPage: page }})),
    setPageSize: (size) => set((store) => ({ taskQuery: { ...store.taskQuery, pageSize: size }})),
    setSelectedStatus: (status) => set((store) => ({ taskQuery: { ...store.taskQuery, selectedStatus: status }})),
    setSearchQuery: (query) => set((store) => ({ taskQuery: { ...store.taskQuery, searchQuery: query }}))
}));

export default useTaskQueryStore;