"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { REQUEST_TYPES, EVENT_SIZES } from "@/lib/constants";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    requestType: "",
    eventDate: "",
    eventSize: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", phone: "", email: "", requestType: "", eventDate: "", eventSize: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="h-12 w-12 text-brand-primary mb-4" />
        <p className="text-lg font-semibold text-brand-text">Message sent!</p>
        <p className="text-brand-muted mt-1">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          Something went wrong. Please try again.
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-brand-text mb-1">
          Full Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(51,138,130,0.12)] transition-all bg-white text-brand-text"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-brand-text mb-1">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(51,138,130,0.12)] transition-all bg-white text-brand-text"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-brand-text mb-1">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(51,138,130,0.12)] transition-all bg-white text-brand-text"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-request-type" className="block text-sm font-medium text-brand-text mb-1">
          Request Type
        </label>
        <select
          id="contact-request-type"
          required
          value={form.requestType}
          onChange={(e) => setForm({ ...form, requestType: e.target.value })}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(51,138,130,0.12)] transition-all bg-white text-brand-text"
        >
          <option value="">Select a request type</option>
          {REQUEST_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-event-date" className="block text-sm font-medium text-brand-text mb-1">
            Event Date <span className="text-brand-muted">(optional)</span>
          </label>
          <input
            id="contact-event-date"
            type="date"
            value={form.eventDate}
            onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(51,138,130,0.12)] transition-all bg-white text-brand-text"
          />
        </div>
        <div>
          <label htmlFor="contact-event-size" className="block text-sm font-medium text-brand-text mb-1">
            Event Size <span className="text-brand-muted">(optional)</span>
          </label>
          <select
            id="contact-event-size"
            value={form.eventSize}
            onChange={(e) => setForm({ ...form, eventSize: e.target.value })}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(51,138,130,0.12)] transition-all bg-white text-brand-text"
          >
            <option value="">Select event size</option>
            {EVENT_SIZES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-brand-text mb-1">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(51,138,130,0.12)] transition-all bg-white text-brand-text resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primaryDark text-white rounded-xl px-6 py-3 font-medium transition-all disabled:opacity-60 flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98]"
        aria-label="Send contact form"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
