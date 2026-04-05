"use client"

import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    })

    setSubmitted(true)
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-6">
        Promote Your Business
      </h1>

      {submitted ? (
        <p className="text-green-600 font-medium">
          Thanks! We’ll be in touch soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Name"
            className="w-full border p-3 rounded"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Email"
            className="w-full border p-3 rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            placeholder="Business Name"
            className="w-full border p-3 rounded"
            onChange={(e) => setForm({ ...form, business: e.target.value })}
          />

          <textarea
            placeholder="Tell us about your business"
            className="w-full border p-3 rounded"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button className="bg-black text-white px-6 py-3 rounded">
            Submit
          </button>
        </form>
      )}
    </main>
  )
}