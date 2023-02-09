import s from "@/styles/components/layout/form.module.scss";

export default function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        yourName: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.form_row}>
        <label htmlFor="name">
          Your Name<span>*</span>
        </label>
        <div className={s.form_control}>
          <input id="name" name="name" type="text" required />
        </div>
      </div>
      <div className={s.form_row}>
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <div className={s.form_control}>
          <input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className={s.form_row}>
        <label htmlFor="message">
          Message<span>*</span>
        </label>
        <div className={s.form_control}>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
      </div>
      <button className={s.form_btn}>
        <span>Send</span>
      </button>
    </form>
  );
}
