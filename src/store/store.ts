import { create } from "zustand";
import {
  AuthSlice,
  createAuthSlice,
} from "src/modules/auth/store/authStore.ts";

export const useStore = create<AuthSlice>()((...a) => ({
  ...createAuthSlice(...a),
}));
