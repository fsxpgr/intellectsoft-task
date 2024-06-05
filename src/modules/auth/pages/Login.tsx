import { useState } from "react";
import { useStore } from "src/store/store.ts";
import { signUp } from "src/modules/auth/store/authActions.ts";
import { Input, Typography } from "@mui/material";
import "./Login.css";
export function Login() {
  const emailInputError = useStore((state) => state.emailInputError);
  const [email, setEmail] = useState("");

  return (
    <section className={"login-page"}>
      <form style={{ background: "rgba(255,255,255, 0.2)" }}>
        <Typography sx={{ fontSize: 30 }} fontWeight={600} gutterBottom>
          Enter your email
        </Typography>
        <Input
          value={email}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailInputError}
        <button
          onClick={(e) => {
            e.preventDefault();
            signUp(email);
          }}
          type="submit"
        >
          Sign up
        </button>
      </form>
    </section>
  );
}
