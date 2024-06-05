import { useStore } from "src/store/store.ts";
import { validateEmail } from "../utils/validateEmail.ts";
import { ROUTES, router } from "src/router/router.tsx";

export const signUp = (email: string) => {
  const { setEmail, setError } = useStore.getState();
  const regExpMatchArray = validateEmail(email);
  if (regExpMatchArray) {
    setEmail(email);
    router.navigate(ROUTES.HOME).catch(console.error);
  } else {
    setError("Email is not valid");
  }
};
