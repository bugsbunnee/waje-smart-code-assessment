import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { HttpResponse, http } from "msw";

import TaskList from "../../src/components/TaskList";

import { server } from "../mocks/server";
import { simulateDelay } from "../utils";
import { TEST_TODOS } from "../dummy-data";

describe("TaskList", () => {
   it('Should render a list of todos/tasks when retrieved from the server.', async () => {
        server.use(http.get(`${import.meta.env.VITE_API_URL}/todos`, () => HttpResponse.json(TEST_TODOS)));
        render(<TaskList />);

        await waitForElementToBeRemoved(() => screen.getAllByTestId('task-skeleton'));
        
        const taskCards = await screen.getAllByTestId("task-card");
        expect(taskCards.length).toBeGreaterThan(0);
   });
  
   it('Should render the card skeletons while loading the todos from the server.', async () => {
        simulateDelay(`${import.meta.env.VITE_API_URL}/todos`);
 
        render(<TaskList />);

        const skeletons = screen.getAllByTestId('task-skeleton');
        expect(skeletons.length).toBeGreaterThan(0);
   });
}); 