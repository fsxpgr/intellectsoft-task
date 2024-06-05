import { StateCreator } from "zustand";

export interface AuthSlice {
  email: string;
  emailInputError: string;
  setEmail: (email: string) => void;
  setError: (error: string) => void;
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set,
) => ({
  email: "",
  emailInputError: "",
  setEmail: (email) => set(() => ({ email })),
  setError: (error) => set(() => ({ emailInputError: error })),
});
