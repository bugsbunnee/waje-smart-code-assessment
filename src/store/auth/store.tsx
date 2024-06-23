import { create } from 'zustand';
import { User } from '../../entities';
import { jwtDecode } from 'jwt-decode';
import { LOGIN_TOKEN_KEY } from '../../utils/constants';

export interface AuthStore {
    user: User | null;
    login: (token: string) => void;
    logout: () => void;
}

const getCurrentUser= (): User | null => {
    const token = localStorage.getItem(LOGIN_TOKEN_KEY);
    if (!token) return null;

    return jwtDecode(token);
};

const useAuthStore = create<AuthStore>((set) => ({
    user: getCurrentUser(),
    login: (token: string) => {
        set(() => ({ user: jwtDecode(token) }));
        localStorage.setItem(LOGIN_TOKEN_KEY, token);
    },
    logout: () => {
        set(() => ({ user: null }));
        localStorage.removeItem(LOGIN_TOKEN_KEY);
    },
}));

export default useAuthStore;