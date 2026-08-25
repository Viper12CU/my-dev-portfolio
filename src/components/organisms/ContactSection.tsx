"use client";

import { useState } from "react";
import { contactData } from "@/data/contact";
import SectionTitle from "@/components/atoms/SectionTitle";
import ContactInfoItem from "@/components/molecules/ContactInfoItem";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact section">
      <SectionTitle
        title={contactData.title}
        subtitle={contactData.subtitle}
      />

      <div className="container mx-auto px-4" data-aos="fade" data-aos-delay="100">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            {contactData.info.map((item, i) => (
              <ContactInfoItem key={i} item={item} />
            ))}
          </div>

          <div className="w-full lg:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:col-span-2">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="sm:col-span-2 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
