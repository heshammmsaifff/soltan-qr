// pages/contact.js
import React, { useState } from "react";
import { useRouter } from "next/router";

function Contact() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      router.push("/after-contact");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c1c1c] via-[#3a2c1b] to-[#d1a562] flex flex-col items-center justify-center px-6 py-10 font-[Cairo]">
      {/* اللوجو */}

      <div className="flex items-center gap-4 mb-6">
        <img src="/logo.png" alt="logo" className="w-24" />
        <img src="/name.png" alt="name" className="w-24" />
      </div>

      {/* الفورم */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-md"
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="اكتب هنا .. شكرا لك"
          className="w-full h-48 p-4 rounded-xl bg-white text-black text-right shadow-md focus:outline-none"
        />

        <button
          type="submit"
          className="mt-6 w-[150px] h-[50px] bg-[#5b4630] text-white font-bold rounded-[30px] shadow-md hover:bg-[#6b5239] transition flex items-center justify-center"
        >
          إرسال
        </button>
      </form>
    </div>
  );
}

export default Contact;
