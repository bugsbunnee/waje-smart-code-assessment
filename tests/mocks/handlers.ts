import { HttpResponse, http } from 'msw'
 
export const handlers = [
  http.get(import.meta.env.VITE_API_UTL + '/todos', () => {
    return HttpResponse.json([
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
    ]);
  }),
]