"use client";

import { useState } from "react";
import supabase from "../lib/supabase";

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const isValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert([{ email }]);

      if (error) throw error;

      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      setStatus({
        type: "success",
        message:
          "Thank you for joining our waitlist! We'll be in touch soon 🥳",
      });

      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="waitlist-form" className="max-w-lg mx-auto p-6 w-full">
      {status.type && (
        <div
          className={`p-4 mb-4 rounded ${
            status.type === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-bold mb-2">
          Early Access Awaits! Sign Up for Exclusive Perks!
          </label>
          <div className="relative mt-1 flex">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
              className="block w-full rounded-md  border border-gray-300
                       focus:border-blue-500 focus:ring-blue-500 p-2 pr-32"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`absolute right-2 top-1/2 -translate-y-1/2
                       px-4 py-1 border border-transparent rounded-md
                        text-white bg-red-500 hover:bg-red-600 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 
                       focus:ring-blue-500 text-sm
                       ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Submitting..." : "Get early access"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
