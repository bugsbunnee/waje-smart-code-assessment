import { render, screen } from "@testing-library/react";
import { server } from "../mocks/server";
import { HttpResponse, http } from "msw";
import { Toaster } from "react-hot-toast";

import AddTask from "../../src/store/tasks/MyTasks/AddTask";
import userEvent from "@testing-library/user-event";

const loadForm = async () => {
    render(
        <>
            <AddTask />
            <Toaster />
        </>
    );

    const titleInput = screen.getByPlaceholderText(/title/i);
    const cancelButton = screen.getByRole("button", { name: 'Cancel'});
    const submitButton = screen.getByRole("button", { name: 'Add'});

    const validData = {
      title: 'New Task',
    };

    const fill = async (task: { title: string | undefined }) => {
        const user = userEvent.setup();

        if (task.title !== undefined) {
            await user.type(titleInput, task.title);
        }

        await user.click(submitButton);
    };

    return {
      titleInput,
      cancelButton,
      submitButton,
      fill,
      validData,
    };
};

describe("AddTask", () => {
    it("should render the AddTask form fields", async () => {
        const { titleInput, cancelButton, submitButton } = await loadForm();
    
        expect(titleInput).toBeInTheDocument();
        expect(cancelButton).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });
  
    it.each([
            {
            scenario: "missing",
            errorMessage: /provide a title/i,
            },
            {
            scenario: "longer than 50 characters",
            title: "a".repeat(51),
            errorMessage: /50/,
            },
        ])(
        "should display an error if title is $scenario",
        async ({ title, errorMessage }) => {
            const inputs = await loadForm();
            await inputs.fill({ title });
    
            const error = screen.getByRole("alert");
            expect(error).toBeInTheDocument();
            expect(error).toHaveTextContent(errorMessage);
        }
    );

    it('should disable the submit button upon submission', async () => {
        const form = await loadForm()
        await form.fill(form.validData);

        expect(form.submitButton).toBeDisabled();
    });

    it('should display a toast if submission fails', async () => {
        server.use(http.post(`${import.meta.env.VITE_API_URL}/todos`, () => HttpResponse.error()));
    
        const form = await loadForm();
        await form.fill(form.validData);
    
        const toast = await screen.findByRole('status');
        expect(toast).toBeInTheDocument();
        expect(toast).toHaveTextContent(/error/i);
    });
});