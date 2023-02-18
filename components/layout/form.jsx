import { useForm } from "react-hook-form";
import { useState } from "react";
import Router from "next/router";
import s from "@/styles/components/layout/form.module.scss";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/send", {
      body: JSON.stringify({
        yourName: data.yourName,
        email: data.email,
        message: data.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.ok) {
      Router.push("/thanks");
    }
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit, onError)}>
      <div className={s.form_row}>
        <label htmlFor="yourName">
          Your Name<span>*</span>
        </label>
        <div className={s.form_control}>
          <input
            id="yourName"
            {...register("yourName", { required: "Your name is required." })}
          />
          <p className={s.error}>{errors.yourName?.message}</p>
        </div>
      </div>
      <div className={s.form_row}>
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <div className={s.form_control}>
          <input
            id="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format.",
              },
            })}
          />
          <p className={s.error}>{errors.email?.message}</p>
        </div>
      </div>
      <div className={s.form_row}>
        <label htmlFor="message">
          Message<span>*</span>
        </label>
        <div className={s.form_control}>
          <textarea
            id="message"
            {...register("message", { required: "Message is required." })}
            cols="30"
            rows="10"
          ></textarea>
          <p className={s.error}>{errors.message?.message}</p>
        </div>
      </div>
      <button className={s.form_btn} type="submit">
        <span>Send</span>
      </button>

      {isSubmitting && (
        <div className={s.submit_message}>
          <p>Submitting the form...</p>
        </div>
      )}
    </form>
  );
}
