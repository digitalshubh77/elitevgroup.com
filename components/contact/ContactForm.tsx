"use client";

import { useState } from "react";
import { Send, CheckCircle, MessageSquare } from "lucide-react";
import { company } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const mobile = data.get("mobile");
    const city = data.get("city");
    const bill = data.get("bill");
    const message = data.get("message");

    const whatsappMessage = encodeURIComponent(
      `Hi Elite Ventures,\n\nName: ${name}\nMobile: ${mobile}\nCity/Village: ${city}\nMonthly Bill: ₹${bill}\nMessage: ${message || "I want a free quote for solar installation."}`
    );

    window.open(
      `https://wa.me/91${company.whatsapp}?text=${whatsappMessage}`,
      "_blank"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-border text-center card-3d relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-solar-green via-accent to-primary" />
        <div className="w-20 h-20 rounded-full bg-solar-green/10 flex items-center justify-center mx-auto mb-5 animate-count-pop">
          <CheckCircle className="w-10 h-10 text-solar-green" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted mb-6 max-w-sm mx-auto">
          Your enquiry has been sent via WhatsApp. Our team will contact you
          shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-accent font-semibold hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-border space-y-5 card-3d relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-solar-green" />

      <div className="flex items-start gap-4 pb-2">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
          <MessageSquare className="w-6 h-6 text-accent-light" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Get Free Quote</h3>
          <p className="text-sm text-muted mt-1">
            Fill the form — we&apos;ll reply on WhatsApp within hours.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-semibold mb-2">
            Mobile Number *
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            pattern="[0-9]{10}"
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            placeholder="10-digit mobile number"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-semibold mb-2">
            City / Village *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            placeholder="Your city or village"
          />
        </div>

        <div>
          <label htmlFor="bill" className="block text-sm font-semibold mb-2">
            Monthly Electricity Bill (₹)
          </label>
          <input
            id="bill"
            name="bill"
            type="number"
            min="0"
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
            placeholder="e.g. 3000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold py-4 rounded-xl shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5 transition-all duration-300"
      >
        <Send className="w-5 h-5" />
        Get Free Quote via WhatsApp
      </button>
    </form>
  );
}
