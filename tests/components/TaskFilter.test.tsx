import { render, screen } from "@testing-library/react";
import { TEST_TODOS, taskStoreDefault } from "../dummy-data";

import TaskFilter from "../../src/components/TaskFilter";
import useTaskQueryStore from "../../src/store/tasks/store";

describe("TaskFilter", () => {
   beforeEach(() => {
        vi.mock('../../src/store/tasks/store', async () => {
            return {
                default: vi.fn().mockReturnValue(taskStoreDefault),
            }
        });
   })

    it("should render all, active and completed filter buttons.", () => {
      render(<TaskFilter />);
  
      const filterButtons = screen.getAllByTestId('filter-button');
      expect(filterButtons).toHaveLength(3)
    });
    
    it("should render accurate All filter button count", async () => {
        vi.mocked(useTaskQueryStore).mockReturnValue({
            ...taskStoreDefault,
            tasks: TEST_TODOS,
        })

        render(<TaskFilter />);

        const filterButtons = screen.getByTestId('All-filter-count');
        expect(filterButtons).toHaveTextContent(TEST_TODOS.length.toString());
    });
   
    it("should render accurate Active filter button count", async () => {
        vi.mocked(useTaskQueryStore).mockReturnValue({
            ...taskStoreDefault,
            tasks: TEST_TODOS,
        })

        render(<TaskFilter />);

        const activeTodoCount = TEST_TODOS.filter((todo) => !todo.completed).length;
        const filterButtons = screen.getByTestId('Active-filter-count');
        expect(filterButtons).toHaveTextContent(activeTodoCount.toString());
    });
    
    it("should render accurate Completed filter button count", async () => {
        vi.mocked(useTaskQueryStore).mockReturnValue({
            ...taskStoreDefault,
            tasks: TEST_TODOS,
        })

        render(<TaskFilter />);

        const completedTodoCount = TEST_TODOS.filter((todo) => todo.completed).length;
        const filterButtons = screen.getByTestId('Completed-filter-count');
        expect(filterButtons).toHaveTextContent(completedTodoCount.toString());
    });
});