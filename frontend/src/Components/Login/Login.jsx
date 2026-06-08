import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import users from "../../Data/users.json";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const onSubmit = (loginCredentials) => {
    setMessage("");
    setIsLoggingIn(true);

    setTimeout(() => {
      const user = users.find(
        (u) =>
          u.email === loginCredentials.email &&
          u.password === loginCredentials.password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      } else {
        setMessage("Invalid Email or Password");
      }

      setIsLoggingIn(false);
      reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Jira Clone
          </h1>

          <p className="text-slate-500 mt-2">
            Sign in to continue
          </p>
        </div>

        {isLoggingIn && (
          <div className="mb-4 text-center text-blue-600 font-medium">
            Logging in...
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Email */}

          <div>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message:
                    "Password must be at least 8 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Error Message */}

          {message && (
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm">
              {message}
            </div>
          )}

          {/* Login Button */}

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300 disabled:bg-gray-400"
          >
            {isLoggingIn ? "Please Wait..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-600">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              <a href="/register">Sign up</a>
            </span>
          </p>
        </div>

        {/* Dummy Credentials */}

        <div className="mt-8 border-t pt-4 text-sm text-slate-500">
          <p className="font-semibold mb-2">
            Demo Credentials
          </p>

          <p>Email: swapnil@gmail.com</p>
          <p>Password: swapnil123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;