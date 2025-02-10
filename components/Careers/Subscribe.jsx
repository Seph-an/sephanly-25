// the icons here have been obtained from : <a target="_blank" href="https://icons8.com/icon/13912/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/13912/facebook">Facebook</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
"use client";
import { useState } from "react";
import { ArrowRight, Loader, Check } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Subscribe = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Validate fields on change
    if (name === "email") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: !validateEmail(value),
      }));
    }
  };

  const isFormValid = !formErrors.email && formData.email;

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axios.post("/api/subscribe", formData);
      return data;
    },
    onSuccess: (data) => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setData(data);
      // After 3 seconds, revert the success state back to default
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    },
    onError: (error) => {
      setIsSubmitting(false);
      setIsError(true);
      setError(error?.message || "An error occurred");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setError("");
    mutation.mutate(formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" w-fit flex flex-col items-center justify-center gap-2 bg-tertiary rounded-md shadow-sm p-8 mb-6"
      >
        <h3 className=" text-base text-center text-secondary font-medium mb-2 ">
          <span className="text-primary">Update me</span> on new opportunities
        </h3>
        {/* Error Message (if any) */}

        {isError && error && (
          <p className="text-red-500 text-center my-1">{error}</p>
        )}

        {formErrors.email && (
          <p className="text-red-500 text-sm mt-1">
            Enter a valid email address.
          </p>
        )}
        {/* Email Input */}
        <div className="flex items-center gap-2">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`text-secondary bg-transparent block w-full px-3 py-2 border ${
              formErrors.email ? "border-red-500" : "border-slate-400"
            } rounded-sm  shadow-sm focus:outline-none focus:ring-primary focus:border-primary`}
          />
          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`cursor-pointer flex items-center gap-3 px-4 py-2 text-white rounded transition-colors duration-300 ease-in-out hover:bg-green-800 ${
              isSuccess ? "bg-green-800" : "bg-primary"
            }`}
          >
            {isSubmitting ? (
              <>
                <span>Submitting...</span>
                <Loader color="#fff" size={20} className="animate-spin" />
              </>
            ) : isSuccess ? (
              <>
                <span>Submitted</span>
                <Check color="#fff" size={20} />
              </>
            ) : (
              <>
                <span>Submit</span>
                <ArrowRight color="#fff" size={20} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
