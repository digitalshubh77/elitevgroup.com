"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
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
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-border text-center">
        <CheckCircle className="w-16 h-16 text-solar-green mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Thank You!
        </h3>
        <p className="text-muted mb-6">
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
      className="bg-white rounded-2xl p-5 md:p-6 shadow-xl border border-border space-y-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
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
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          placeholder="10-digit mobile number"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-semibold mb-2">
          City / Village *
        </label>
        <input
          id="city"
          name="city"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
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
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
          placeholder="e.g. 3000"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold py-3.5 rounded-xl shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300"
      >
        <Send className="w-5 h-5" />
        Get Free Quote
      </button>
    </form>
  );
}
