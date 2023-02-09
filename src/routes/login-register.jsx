import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../components/button";
import Error from "../components/error";
import InputText from "../components/form/input-text";
import apiService from "../services/api";

export default function LoginRegister() {
  const [isRegistering, setIsRegistering] = useState(true);
  const [error, setError] = useState(null);

  const formSchema = isRegistering
    ? yup.object({
        username: yup.string().required("Username is required"),
        password: yup
          .string()
          .min(3, "Password must be at least 3 characters long"),

        //  Only validate WHEN the password field has a value
        confirmPassword: yup.string().when("password", {
          is: (passwordVal) => passwordVal.length,
          then: yup
            .string()
            .oneOf([yup.ref("password")], "Passwords must match"),
        }),
      })
    : yup.object({
        username: yup.string().required("Username is required"),
        password: yup
          .string()
          .min(3, "Password must be at least 3 characters long"),
      });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // Yup will run for validation as the user types in the form inputs.
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const handleError = (error) => {
    if (error.response) {
      error.response.json().then((json) => {
        setError(json);
      });
    } else {
      setError({ message: error.message });
    }
  };

  const handleSubmission = (submittedUser) => {
    apiService
      .loginOrRegister(submittedUser, isRegistering)
      .then((response) => {
        if (response.token) {
          localStorage.setItem("token", response.token);
        }
      })
      .catch((error) => {
        handleError(error);
      });
  };

  return (
    <main>
      <form
        className="mt-4 flex flex-col items-center gap-y-4"
        // 'handleSubmit' is what React Hook Form uses for the submission
        // 'handleSubmission' is the function we wrote to be used by React Hook Form
        onSubmit={handleSubmit(handleSubmission)}
        onFocus={() => {
          setError(null);
        }}
      >
        <InputText label="Username" id="username" register={register}>
          {errors.username && <Error message={errors.username.message} />}
        </InputText>
        <InputText
          label="Password"
          id="password"
          type="password"
          register={register}
        >
          {errors.password && <Error message={errors.password.message} />}
        </InputText>

        {isRegistering && (
          <InputText
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            register={register}
          >
            {errors.confirmPassword && (
              <Error message={errors.confirmPassword.message} />
            )}
          </InputText>
        )}

        <Button type="submit" text={isRegistering ? "Sign Up" : "Login"} />

        <button
          type="reset"
          className="text-center"
          onClick={() => {
            setIsRegistering((prev) => !prev);
          }}
        >
          {isRegistering
            ? "Already have an account?"
            : "Don't have an account?"}
        </button>

        {/* Conditional rendering: IF error is updated to something truthy (not null)... */}
        {error && <Error message={error.message} />}
      </form>
    </main>
  );
}
