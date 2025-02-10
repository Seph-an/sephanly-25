"use client";
import { ArrowRight, Loader, Check } from "lucide-react";
import CustomDropdown from "./CustomSelect";

export default function QuotationForm({
  formData,
  setFormData,
  handleChange,
  handleSubmit,
  formErrors,
  isFormValid,
  isSubmitting,
  isSuccess,
  isError,
  error,
  onClose,
}) {
  const handleClick = () => {
    if (isSubmitting) {
      return;
    } else {
      onClose();
    }
  };
  return (
    <div className="w-[350px] mx-auto">
      <div className="p-4 rounded-lg shadow-lg">
        <h2 className="text-lg text-center text-secondary font-semibold mb-1">
          Get Quotation!
        </h2>
        {!isFormValid && (
          <p className="text-red-600 text-base font-light text-center mb-1">
            * compulsory fields.
          </p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-secondary opacity-70"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 text-gap-bg bg-transparent block w-full px-3 py-1 border ${
                formErrors.name ? "border-red-500" : "border-slate-400"
              } rounded-sm  shadow-sm focus:outline-none focus:ring-gap-bg focus:border-gap-bg`}
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">
                Name must be at least 2 letters.
              </p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-secondary opacity-70"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 text-gap-bg bg-transparent block w-full px-3 py-1 border ${
                formErrors.email ? "border-red-500" : "border-slate-400"
              } rounded-sm  shadow-sm focus:outline-none focus:ring-gap-bg focus:border-gap-bg`}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">
                Enter a valid email address.
              </p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-secondary opacity-70"
            >
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 text-gap-bg bg-transparent block w-full px-3 py-1 border ${
                formErrors.phone ? "border-red-500" : "border-slate-400"
              } rounded-sm  shadow-sm focus:outline-none focus:ring-gap-bg focus:border-gap-bg`}
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm mt-1">
                Phone must be exactly 10 digits.
              </p>
            )}
          </div>

          {/* Site Link Input */}
          <div>
            <label
              htmlFor="site"
              className="block text-sm font-medium text-secondary opacity-70"
            >
              Site link
            </label>
            <input
              type="text"
              id="site"
              name="site"
              value={formData.site}
              onChange={handleChange}
              className={`mt-1 text-gap-bg bg-transparent block w-full px-3 py-1 border ${
                formErrors.site ? "border-red-500" : "border-slate-400"
              } rounded-sm  shadow-sm focus:outline-none focus:ring-gap-bg focus:border-gap-bg`}
            />
            {formErrors.site && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid URL.
              </p>
            )}
          </div>

          {/* Service Select */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-secondary opacity-70"
            >
              Pick a service <span className="text-red-600">*</span>
            </label>
            <CustomDropdown
              value={formData.service}
              options={[
                "Web Development",
                "Search Engine Optimization",
                "API Integration",
                "Digital Marketing",
                "UI/UX",
                "Custom Software",
              ]}
              onChange={(selectedOption) =>
                setFormData((prevData) => ({
                  ...prevData,
                  service: selectedOption,
                }))
              }
              error={formErrors.service}
            />
            {formErrors.service && (
              <p className="text-red-500 text-sm mt-1">Service is required.</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-secondary opacity-70"
            >
              How can we help you? <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className={`mt-1 text-gap-bg bg-transparent block w-full px-3 py-1 border ${
                formErrors.message ? "border-red-500" : "border-slate-400"
              } rounded-sm  shadow-sm focus:outline-none focus:ring-gap-bg focus:border-gap-bg`}
            />
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1">
                Message must be at least 3 words.
              </p>
            )}
          </div>

          {/* Error Message (if any) */}
          {isError && error && (
            <p className="text-red-500 text-center my-1">{error}</p>
          )}

          {/* Submit Button */}
          <div className="flex justify-between mt-4">
            <button
              onClick={handleClick}
              className="px-9 py-2 border text-secondary bg-red-300 rounded hover:bg-red-400"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={` flex items-center gap-3 px-4 py-2 text-white rounded ${
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

          {/* I prefer mail */}

          <p className=" text-secondary mt-3 text-center">
            I prefer sending an{" "}
            <span className="underline font-bold text-sm text-primary">
              E-mail
            </span>{" "}
            directly.
          </p>
        </form>
      </div>
    </div>
  );
}
