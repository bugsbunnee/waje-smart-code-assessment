import { render, screen } from "@testing-library/react";
import { mockAuthStore } from "../utils";

import Header from "../../src/components/Header";

describe("Header", () => {
    it("should render the welcome message when the Header component is mounted.", () => {
      mockAuthStore({ firstName: 'Marcel', lastName: 'Chukwuma', email: 'marcel.chukwuma00@gmail.com' });

      render(<Header />);
  
      expect(screen.getByText(/welcome,/i)).toBeInTheDocument();
    })
});