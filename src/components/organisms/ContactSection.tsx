"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/atoms/SectionTitle";
import ContactInfoItem from "@/components/molecules/ContactInfoItem";
import Icon from "@/components/atoms/Icon";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: keyof FormData, value: string): string | undefined {
  const v = value.trim();
  switch (name) {
    case "name":
      if (!v) return "nameRequired";
      if (v.length < 2) return "nameMinLength";
      if (v.length > 100) return "nameMaxLength";
      return undefined;
    case "phone":
      if (!v) return undefined;
      if (!/^\+?[\d\s\-().]+$/.test(v)) return "phoneInvalid";
      const digits = v.replace(/\D/g, "");
      if (digits.length < 7 || digits.length > 15) return "phoneDigits";
      if (v.length > 20) return "phoneMaxLength";
      return undefined;
    case "email":
      if (!v) return "emailRequired";
      if (!emailRegex.test(v)) return "emailInvalid";
      if (v.length > 254) return "emailMaxLength";
      return undefined;
    case "message":
      if (!v) return "messageRequired";
      if (v.length < 10) return "messageMinLength";
      if (v.length > 2000) return "messageMaxLength";
      return undefined;
    default:
      return undefined;
  }
}

function validateAll(data: FormData): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(data) as (keyof FormData)[]).forEach((key) => {
    const err = validateField(key, data[key]);
    if (err) errors[key] = err;
  });
  return errors;
}

export default function ContactSection() {
  const t = useTranslations("Contact");
  const info = t.raw("info") as { icon: string; label: string; value: string }[];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formLoadedAt] = useState(() => Date.now());
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData] || errors[name as keyof FormData]) {
      const err = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
    if (status === "success" || status === "error") {
      setStatus("idle");
      setSubmitError(null);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const isLoading = status === "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateAll(formData);
    setErrors(validationErrors);
    setTouched({ name: true, phone: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          website: honeypot,
          formLoadedAt,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || t("form.errors.server"));
      }

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (err) {
      setStatus("error");
      setSubmitError(err instanceof Error ? err.message : t("form.errors.generic"));
    }
  };

  const getError = (key: keyof FormErrors) => {
    const errorKey = errors[key];
    if (!errorKey) return "\u00A0";
    try {
      return t(`form.errors.${errorKey}`);
    } catch {
      return errorKey;
    }
  };

  return (
    <section id="contact" className="contact section">
      <SectionTitle
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            {info.map((item, i) => (
              <ContactInfoItem key={i} item={item} />
            ))}
          </div>

          <div className="col-lg-8">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="contact-name" className="sr-only">{t("form.nameLabel")}</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    placeholder={t("form.namePlaceholder")}
                    required
                    maxLength={100}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby="error-name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isLoading}
                  />
                  <small
                    id="error-name"
                    className="text-danger d-block mt-1"
                    style={{ color: "#df1529", fontSize: "13px" }}
                    aria-live="polite"
                  >
                    {getError("name")}
                  </small>
                </div>
                <div className="col-md-6">
                  <label htmlFor="contact-phone" className="sr-only">{t("form.phoneLabel")}</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    name="phone"
                    placeholder={t("form.phonePlaceholder")}
                    maxLength={20}
                    aria-invalid={!!errors.phone}
                    aria-describedby="error-phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputMode="tel"
                    autoComplete="tel"
                    disabled={isLoading}
                  />
                  <small
                    id="error-phone"
                    className="text-danger d-block mt-1"
                    style={{ color: "#df1529", fontSize: "13px" }}
                    aria-live="polite"
                  >
                    {getError("phone")}
                  </small>
                </div>
                <div className="col-md-12">
                  <label htmlFor="contact-email" className="sr-only">{t("form.emailLabel")}</label>
                  <input
                    type="email"
                    id="contact-email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    name="email"
                    placeholder={t("form.emailPlaceholder")}
                    required
                    maxLength={254}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby="error-email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    disabled={isLoading}
                  />
                  <small
                    id="error-email"
                    className="text-danger d-block mt-1"
                    style={{ color: "#df1529", fontSize: "13px" }}
                    aria-live="polite"
                  >
                    {getError("email")}
                  </small>
                </div>
                <div className="col-md-12">
                  <label htmlFor="contact-message" className="sr-only">{t("form.messageLabel")}</label>
                  <textarea
                    id="contact-message"
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    name="message"
                    rows={6}
                    placeholder={t("form.messagePlaceholder")}
                    required
                    maxLength={2000}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby="error-message-field"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isLoading}
                  />
                  <small
                    id="error-message-field"
                    className="text-danger d-block mt-1"
                    style={{ color: "#df1529", fontSize: "13px" }}
                    aria-live="polite"
                  >
                    {getError("message")}
                  </small>
                </div>
                <div className="col-md-12 text-center">
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      opacity: 0,
                      height: 0,
                      width: 0,
                      overflow: "hidden",
                    }}
                  >
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    className="error-message"
                    role="alert"
                    aria-live="assertive"
                    style={{ display: status === "error" ? "block" : "none" }}
                  >
                    {submitError}
                  </div>
                  <div
                    className="sent-message"
                    role="status"
                    aria-live="polite"
                    style={{ display: status === "success" ? "block" : "none" }}
                  >
                    {t("form.success")}
                  </div>
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? t("form.sending") : t("form.send")}
                    <Icon name="Send" size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
