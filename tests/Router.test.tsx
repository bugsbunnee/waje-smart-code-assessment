import { screen } from '@testing-library/react'
import { mockAuthStore, navigateTo } from './utils'

describe('Authentication', () => {
  it('should render the welcome page for /', () => {
    navigateTo('/');

    expect(screen.getByRole('button', { name: /get started with task it/i })).toBeInTheDocument();
  });

  it('should render the tasks page for authenticated users /tasks', () => {
    mockAuthStore({ firstName: 'Marcel', lastName: 'Chukwuma', email: 'marcel.chukwuma00@gmail.com' });

    navigateTo('/tasks');

    expect(screen.getByText(/add new task/i)).toBeInTheDocument();
  });

  it('should render the not found page for invalid routes', () => {
    navigateTo('/invalid-route');

    expect(screen.getByText(/invalid page/i)).toBeInTheDocument();
  });
})