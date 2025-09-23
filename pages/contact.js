// pages/contact.js
import React, { useState } from "react";
import { useRouter } from "next/router";

const branches = [
  "فاقوس شارع الدروس",
  "فاقوس المنشية الجديدة",
  "أبو كبير",
  "ديرب نجم",
  "دوران رضا",
  "أبو عطوة",
];

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // منع الضغط المتكرر

    setLoading(true);
    const data = { name, phone, branch, message };

    try {
      await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      router.push("/after-contact");
    } catch (err) {
      console.error("Error sending message:", err);
      setLoading(false);
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
        className="flex flex-col items-center w-full max-w-md relative"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="الاسم"
          className="w-full p-4 mb-4 rounded-xl bg-white text-black shadow-md focus:outline-none"
          required
        />

        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            // يمنع كتابة أي حاجة غير أرقام
            const value = e.target.value.replace(/\D/g, "");
            setPhone(value);
          }}
          placeholder="رقم الموبايل"
          className="w-full p-4 mb-4 rounded-xl bg-white text-black shadow-md focus:outline-none"
          required
          dir="rtl"
          maxLength={11}
          minLength={11}
          pattern="[0-9]{11}"
        />

        {/* الـ select مع سهم مخصص */}
        <div className="relative w-full mb-4">
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full p-4 rounded-xl bg-white text-black shadow-md focus:outline-none appearance-none pr-4"
            required
          >
            <option value="" disabled>
              اختر الفرع
            </option>
            {branches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          {/* أيقونة السهم */}
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-black ml-2 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="اكتب هنا .. شكرا لك"
          className="w-full h-48 p-4 rounded-xl bg-white text-black text-right shadow-md focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className={`mt-6 w-[150px] h-[50px] font-bold rounded-[30px] shadow-md transition flex items-center justify-center
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#5b4630] text-white hover:bg-[#6b5239]"
            }`}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              <span>جارٍ الإرسال...</span>
            </div>
          ) : (
            "إرسال"
          )}
        </button>
      </form>
    </div>
  );
}

export default Contact;
