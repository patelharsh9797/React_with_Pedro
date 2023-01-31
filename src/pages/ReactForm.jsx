import React from "react";

// TODO form Hook && yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ReactForm = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required."),
    email: yup.string().email().required(),
    age: yup.number().integer().positive().min(18).required(),
    password: yup
      .string()
      .required("Password is required.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .max(16),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Confirm Password must be same as Password."
      )
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>React Form Hook</h2>
        <input
          type="text"
          placeholder="Full Name..."
          {...register("fullName")}
        />
        {errors.fullName && (
          <span className="errorMsg">{errors.fullName.message}</span>
        )}

        <input type="email" placeholder="Email..." {...register("email")} />
        {errors.email && (
          <span className="errorMsg">{errors.email.message}</span>
        )}

        <input type="number" placeholder="Age..." {...register("age")} />
        {errors.age && <span className="errorMsg">{errors.age.message}</span>}

        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        {errors.password && (
          <span className="errorMsg">{errors.password.message}</span>
        )}

        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="errorMsg">{errors.confirmPassword.message}</span>
        )}

        <input type="submit" value="SUBMIT" className="btn" />
      </form>
    </>
  );
};

export default ReactForm;
