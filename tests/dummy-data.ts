import { Task } from "../src/entities";
import { TaskStore } from "../src/store/tasks/store";

export const TEST_TODOS: Task[] = [
    {
        id: 1,
        title: 'Task 1',
        completed: false,
    },
    {
        id: 2,
        title: 'Task 2',
        completed: false,
    },
    {
        id: 3,
        title: 'Task 3',
        completed: true,
    }
];

export const taskStoreDefault: TaskStore = {
    tasks: TEST_TODOS,
    isLoading: false,
    error: false,
    addNewTask: false,
    taskQuery: {
        currentPage: 1,
        pageSize: 12,
        selectedStatus: '',
        searchQuery: ''
    },
    setAddNewTask: vi.fn(),
    setTasks: vi.fn(),
    setLoading: vi.fn(),
    setError: vi.fn(),
    setCurrentPage: vi.fn(),
    setPageSize: vi.fn(),
    setSelectedStatus: vi.fn(),
    setSearchQuery: vi.fn(),
};