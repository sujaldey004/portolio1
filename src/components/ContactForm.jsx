import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const contactFormSchema = Z.object({
    name: Z.string().nonempty("Name is required"),
    email: Z.string().email("Invalid email").nonempty("Email is required"),
    subject: Z.string().nonempty("Subject is required"),
    message: Z.string().nonempty("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const onSubmit = async () => {
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      alert("Message sent successfully!");
    } catch (error) {
      console.log("FAILED.....", error);
      alert("Failed to send message, please try again.");
    } finally {
      setLoading(false);
      reset(initialValues);
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="flex-center">
      <form
        id="Contact-form"
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
        className="w-full text-[#a7a7a7] flex flex-col gap-7"
      >
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            {...register("name")}
            name="name"
            type="text"
            id="name"
            placeholder="John Doe"
            className="input"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            {...register("email")}
            name="email"
            type="text"
            id="email"
            placeholder="hello123@gmail.com"
            className="input"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="label">
            Subject
          </label>
          <input
            {...register("subject")}
            name="subject"
            type="text"
            id="subject"
            placeholder="Collaboration or work"
            className="input"
          />
          {errors.subject && (
            <span className="text-red-500">{errors.subject.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            {...register("message")}
            name="message"
            type="text"
            id="message"
            placeholder="type here"
            className="input"
            rows={"5"}
          />
          {errors.message && (
            <span className="text-red-500">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`disabled:opacity-70 w-full py-4 bg-blue-50 text-white-50 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 cursor-pointer`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
