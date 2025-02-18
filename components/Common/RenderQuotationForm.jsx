"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import QuotationForm from "./QuotationForm";

const RenderQuotationForm = ({ onClose }) => {
  const [buttonColor, setButtonColor] = useState("bg-primary");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    site: "",
    service: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    site: false,
    service: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

  // Helper function to validate a URL.
  const validateSite = (site) => {
    try {
      new URL(site);
      return true;
    } catch (err) {
      return false;
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length === 10 && /^[0-9]+$/.test(phone);
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
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
    if (name === "phone") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        phone: !validatePhone(value),
      }));
    }
    if (name === "name") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: !validateName(value),
      }));
    }
    if (name === "service") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        service: value.trim() === "",
      }));
    }
    if (name === "site") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        site: !validateSite(value),
      }));
    }
    if (name === "message") {
      // Split the message by whitespace and check if there are at least 3 words
      const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        message: wordCount < 3,
      }));
    }
  };

  const isFormValid =
    !formErrors.name &&
    !formErrors.phone &&
    !formErrors.email &&
    !formErrors.service &&
    !formErrors.site &&
    !formErrors.message &&
    formData.name &&
    formData.phone &&
    formData.email &&
    formData.service &&
    // formData.site &&
    formData.message;

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axios.post("/api/quotations", formData);
      return data;
    },
    onSuccess: (data) => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setData(data);
      // After 3 seconds, revert the success state back to default
      setTimeout(() => {
        setIsSuccess(false);
        setButtonColor("bg-primary");
        setFormData({
          name: "",
          email: "",
          phone: "",
          site: "",
          service: "",
          message: "",
        });
        onClose();
      }, 3000);
    },
    onError: (error) => {
      setIsSubmitting(false);
      setButtonColor("bg-primary");
      setIsError(true);
      setError(error?.message || "An error occurred");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setError("");
    setButtonColor("bg-green-800");
    mutation.mutate(formData);
  };

  return (
    <div>
      <QuotationForm
        formData={formData}
        buttonColor={buttonColor}
        setFormData={setFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formErrors={formErrors}
        isFormValid={isFormValid}
        isSubmitting={isSubmitting}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
        onClose={onClose}
      />
    </div>
  );
};

export default RenderQuotationForm;
