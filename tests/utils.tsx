
import { HttpResponse, delay, http } from "msw";
import { server } from "./mocks/server";
import { render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { User } from "../src/entities";

import useAuthStore from "../src/store/auth/store";

import routes from "../src/utils/router";

export const simulateDelay = (endpoint: string) => {
    server.use(
        http.get(endpoint, async () => {
        await delay();
        return HttpResponse.json([]);
        })
    );
}

export const simulateError = (endpoint: string) => {
    server.use(http.get(endpoint, () => HttpResponse.error()));
};

export const mockAuthStore = (user: User | null) => {
    vi.mocked(useAuthStore).mockReturnValue({
        user,
        login: vi.fn(),
        logout: vi.fn(),
    });
};

export const navigateTo = (path: string) => {
    const router = createMemoryRouter(routes, {
      initialEntries: [path]
    })
  
    render(<RouterProvider router={router} />);
};