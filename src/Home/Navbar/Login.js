import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //   if (user){
  //     console.log(user)
  //   }
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card bg-base-100 shadow-xl flex">
        <div className="card-body">
          <h2 className="card-title text-center justify-center lg:text-4xl sm:text-2xl text-info my-3">Login Here!</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Email Section */}

            <div className="form-control w-96 max-w-xs text-center justify-center">
              <label className="label">
                <span className="label-text text-black lg:font-bold">Type your email here</span>
              </label>

              <input
                type="email"
                placeholder="Add an email"
                className="input input-bordered input-info w-96 max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required!",
                  },
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please, enter a valid email!",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <p className="label-text-alt text-red-600" role="alert">
                    {errors.email.message}
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="label-text-alt text-red-600" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </label>
            </div>

            {/* Password Section  */}
            <div className="form-control w-96 max-w-xs text-center justify-center">
              <label className="label">
                <span className="label-text text-black lg:font-bold">Set a password</span>
              </label>
            <input
              type="password"
              placeholder="Password."
              className="input input-bordered input-info w-96 max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required!",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 character or longer.",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            <label className="label">
            {errors.password?.type === "required" && (
              <p className="label-text-alt text-red-600" role="alert">
                {errors.password.message}
              </p>
            )}

            {errors.password?.type === "minLength" && (
              <p className="label-text-alt text-red-600" role="alert">
                {errors.password.message}
              </p>
            )}
            </label>
            </div>

            {/* Submit Button  */}

            <input
              className="btn w-full max-w-xs btn-info text-black"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
